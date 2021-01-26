import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Answer } from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

createAnswer(answer:Answer){
  return this.http.post(environment.baseUrl+"forum/answer",answer,{ withCredentials: true })
}

}
