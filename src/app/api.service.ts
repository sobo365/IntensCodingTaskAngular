import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class ApiService {

  candidateDTO = {
    fullName: 'Rade',
    dateOfBirth: '1990-02-02',
    contactNumber: 'rade',
    email: 'rate',
  }
  

  private SERVER_URL_CANDIDATES = "http://localhost:8080/candidates";
  private SERVER_URL_CANDIDATE_SKILLS = "http://localhost:8080/candidateskills"

  constructor(private httpClient: HttpClient) { }


  public getCandidates(){  
		return this.httpClient.get(this.SERVER_URL_CANDIDATES);  
  } 

  public addCandidate(fullName, email, dateOfBirth, contact){
    this.candidateDTO.contactNumber = contact;
    this.candidateDTO.fullName = fullName;
    this.candidateDTO.email = email;
    this.candidateDTO.dateOfBirth = dateOfBirth;
    return this.httpClient.post(this.SERVER_URL_CANDIDATES, this.candidateDTO);
  }
  
  public deleteCandidate(candidate){
    const url = `${this.SERVER_URL_CANDIDATES}/${candidate.id}`;
    return this.httpClient.delete(url);
    
  }

  public searchCandidates(query){
    const url = `${this.SERVER_URL_CANDIDATES}/${query}`;
    return this.httpClient.get(url);
  }


  public getCandidateSkills(candidate){
    const url = `${this.SERVER_URL_CANDIDATE_SKILLS}/${candidate.id}`;
    return this.httpClient.get(url);
  }

  public deleteCandidateSkill(candidate, skillId){
    const url = `${this.SERVER_URL_CANDIDATE_SKILLS}/${candidate.id}/${skillId}`;
    return this.httpClient.delete(url);
  }

}
