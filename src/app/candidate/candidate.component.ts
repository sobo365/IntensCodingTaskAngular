import { Component, OnInit, Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { ApiService } from '../api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})


  export class CandidateComponent implements OnInit  {
    

    candidate = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      dateOfBirth: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required)
    })
 
    
	
    
    ngOnInit(){}

    constructor(private apiService: ApiService,public dialog: MatDialog){   }

    submit(){
      if(!this.candidate.valid){
        alert('Invalid input!')
      }else{
        this.apiService.addCandidate(this.candidate.get('fullName').value, this.candidate.get('email').value, this.candidate.get('dateOfBirth').value, this.candidate.get('contact').value).subscribe(
          response => {
            console.log(response);
            
          }
        );
        this.dialog.closeAll();
      }
      

    }

    closeDialog(): void {
      const dialogRef = this.dialog.closeAll();
  
      
    }
   
}
