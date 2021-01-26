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

}