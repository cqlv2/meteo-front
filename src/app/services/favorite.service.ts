import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Favorite } from '../models/favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {


  constructor(private http:HttpClient) { }

  getFavorite(memberId:number) : Observable<Favorite[]>{
    return this.http.get<Favorite[]>(environment.baseUrl+"api/favorite/member/"+memberId, {withCredentials:true});
  }

}
