import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { CandidateComponent } from './candidate/candidate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatProgressSpinnerModule } from '@angular/material';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CandidatesComponent,
    CandidateComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
        ReactiveFormsModule
    
  ],
  entryComponents: [
    CandidateComponent,
    SkillsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
