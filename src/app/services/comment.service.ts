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
    return this.http.post<Comment>(`${environment.baseUrl}forum/comment`, comment, { withCredentials: true });
  }

  editContain(id: number, contain: string): Observable<Comment>{
    return this.http.put<Comment>(`${environment.baseUrl}forum/comment/edit/${id}`, contain, { withCredentials: true });
  }

  deleteComment(id: number){
    return this.http.delete(`${environment.baseUrl}forum/comment/${id}`,{ withCredentials: true, responseType: 'text'});
  }

}
