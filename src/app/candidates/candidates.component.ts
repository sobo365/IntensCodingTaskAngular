import { Component, OnInit, NgModule, ApplicationModule, ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api.service';
import { CandidateComponent } from '../candidate/candidate.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SkillsComponent } from '../skills/skills.component';


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
  queryFullName= '';
  querySkills='';
  
  constructor(private apiService: ApiService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.apiService.getCandidates().subscribe((data: any)=>{  
			console.log(data);  
			this.candidates = data.candidates;  
    });
    
  }

  searchFullName(){
    this.querySkills = '';
    this.apiService.searchCandidates(this.queryFullName).subscribe((data: any) =>{
      console.log(data);
      this.candidates = data.candidates;
    });
  }

  searchSkills(){
    this.queryFullName = '';
    this.apiService.searchCandidatesBySkills(this.querySkills).subscribe((data: any) =>{
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
    this.selectedCandidate = 0;
    this.candidateSkills = [];
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
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.apiService.getCandidates().subscribe((data: any)=>{  
        console.log(data);  
        this.candidates = data.candidates;  
      });
    });
  }

  addSkill(): void{
    const dialogRef = this.dialog.open(SkillsComponent, {
      data: {candidateId: this.candidates[this.selectedPosition].id},
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.apiService.getCandidateSkills(this.candidates[this.selectedPosition]).subscribe((data: any)=>{  
        console.log(data);  
        this.candidateSkills = data.candidateSkills;  
      });
    });
  }

}
