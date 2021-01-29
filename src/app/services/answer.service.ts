import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Answer } from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

createAnswer(answer:Answer): Observable<Answer>{
  return this.http.post<Answer>(environment.baseUrl+"forum/answer",answer,{ withCredentials: true })
}

editContain(id:number, newContain:string):Observable<Answer>{
  return this.http.put<Answer>(environment.baseUrl+"forum/answer/edit/"+id,newContain,{ withCredentials: true })
}

deleteAnswer(id:number){
  return this.http.delete(environment.baseUrl+"forum/answer/"+id,{withCredentials:true, responseType:"text"})
}

}
