import { Component, OnInit, NgModule, ApplicationModule, ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api.service';
import { CandidateComponent } from '../candidate/candidate.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})

@NgModule({
  declarations: [ CandidateComponent]
})
export class CandidatesComponent implements OnInit {
  candidates = [];
  candidateSkills = [];
  selectedCandidate = 1;
  selectedPosition = 0;
  query= '';
  
  constructor(private apiService: ApiService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.apiService.getCandidates().subscribe((data: any)=>{  
			console.log(data);  
			this.candidates = data.candidates;  
    });
    
  }

  search(){
    this.apiService.searchCandidates(this.query).subscribe((data: any) =>{
      console.log(data);
      this.candidates = data.candidates;
    });
  }

  selectCandidate(candidatePosition){
    this.selectedPosition = candidatePosition;
    this.selectedCandidate =  this.candidates[candidatePosition]

    this.apiService.getCandidateSkills(this.candidates[candidatePosition]).subscribe((data: any)=>{  
      console.log(data);  
			this.candidateSkills = data.candidateSkills;  
    });
 
  }

  

  removeCandidate(id){
    this.apiService.deleteCandidate(this.candidates[this.selectedPosition]).subscribe(
      response => {
        console.log(response);
      }
    );
    this.candidates.splice(this.selectedPosition,1);
    this.selectedCandidate = -100;
  }

  removeCandidateSkill(skillId, position){
    this.apiService.deleteCandidateSkill(this.candidates[this.selectedPosition], skillId).subscribe(
      response => {
        console.log(response);
      }
    );
    this.candidateSkills.splice(position, 1);
    
  }

 

  addCandidate(): void {
    const dialogRef = this.dialog.open(CandidateComponent, {
      width: '400px',
      data: {fullName: 'rade'}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.apiService.getCandidates().subscribe((data: any)=>{  
        console.log(data);  
        this.candidates = data.candidates;  
      });
    });
  }

}
