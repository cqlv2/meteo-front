import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }


  createComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${environment.baseUrl}forum/comment`, comment, { withCredentials: true })
  }

}
