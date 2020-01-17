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
    

    // candidateForm = new FormGroup({
    //   fullName: new FormControl('', Validators.required)
    // })

    fullName: any;
    email: any;
    dateOfBirth: any;
    contact: any;

    
    
    

    ngOnInit(){}

    constructor(private apiService: ApiService,public dialog: MatDialog){   }

    submit(){

      this.apiService.addCandidate(this.fullName, this.email, this.dateOfBirth, this.contact).subscribe(
        response => {
          console.log(response);
          
        }
      );
      this.dialog.closeAll();
    }

    closeDialog(): void {
      const dialogRef = this.dialog.closeAll();
  
      
    }
   
}
