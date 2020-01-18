import { Component, OnInit, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { ApiService } from '../api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: any;
  name: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    public dialog: MatDialog

  ) { }

  ngOnInit() {
    this.apiService.getSkills().subscribe((data: any)=>{  
			console.log(data);  
			this.skills = data.skills;
    });
  }

  addSkillToCandidate(skillPos): void {

    this.apiService.addSkillToCandidate(this.data.candidateId, this.skills[skillPos].id).subscribe((data: any)=>{  
      console.log(data);    
    });

  }

  addNewSkill(): void{
    this.apiService.addSkill(this.name).subscribe((data: any)=>{  
			console.log(data);  
      this.skills = data;
      alert(data.httpStatus);
    });
    
  }

  

  closeDialog(): void {
    const dialogRef = this.dialog.closeAll();

    
  }

  

}
