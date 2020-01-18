import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class ApiService {

  candidateDTO = {
    fullName: 'test',
    dateOfBirth: '1990-02-02',
    contactNumber: 'test',
    email: 'test@test.com',
  }

  candidateSkillDTO = {
    candidateId: 0,
    skillId: 0
  }

  skillDTO = {
    name: 'test'
  }
  

  private SERVER_URL_CANDIDATES = "http://localhost:8080/candidates";
  private SERVER_URL_CANDIDATE_SKILLS = "http://localhost:8080/candidateskills";
  private SERVER_URL_SKILLS = "http://localhost:8080/skills";

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

  public searchCandidatesBySkills(query){
    const url = `${this.SERVER_URL_CANDIDATES}/searchSkills/${query}`;
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

  public getSkills(){
    return this.httpClient.get(this.SERVER_URL_SKILLS);
  }

  public addSkill(name){
    this.skillDTO.name = name;
    return this.httpClient.post(this.SERVER_URL_SKILLS, this.skillDTO);
  }

  public addSkillToCandidate(candidateId, skillId){
    this.candidateSkillDTO.candidateId = candidateId;
    this.candidateSkillDTO.skillId = skillId;
    return this.httpClient.post(this.SERVER_URL_CANDIDATE_SKILLS, this.candidateSkillDTO);
  }

}
