import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  
  topicSubject = new Subject<Topic>();


  constructor(private http: HttpClient, private _router: Router) {}

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${environment.baseUrl}forum/topic`);
  }

  getTopicById(id:number): Observable<Topic> {
    return this.http.get<Topic>(`${environment.baseUrl}forum/topic/${id}`);
  }


  addTopic(topic: Topic): Observable<Topic>{
    return this.http.post<Topic>(`${environment.baseUrl}forum/topic`, topic);
  }

  sendToTopicSubject(topic: Topic) {
    this.topicSubject.next(topic);
  }

  getFromTopicSubject() {
    return this.topicSubject.asObservable();
  }

  deleteTopic(topicId: number) {
    return this.http.delete(`${environment.baseUrl}forum/topic/${topicId}`, {withCredentials:true, responseType:"text"})
  }

  updateTopic(id : number, label : string) : Observable<Topic>{
    return this.http.put<Topic>(`${environment.baseUrl}forum/topic/edit/${id}`, label, {withCredentials:true});
  }
}
