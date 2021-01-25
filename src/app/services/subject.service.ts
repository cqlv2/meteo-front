import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from '../models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {



  constructor(private http: HttpClient) { }



  getSubjectById(id: string){
    return this.http.get<Subject>(`${environment.baseUrl}forum/subject/${id}`);
  }

  createSubject(subject: Subject){
    return this.http.post<Subject>(`${environment.baseUrl}forum/subject`, subject);
  }

}

