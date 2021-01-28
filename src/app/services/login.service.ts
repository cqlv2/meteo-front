import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, BehaviorSubject, Observable, Subject } from 'rxjs';
import { Connection } from '../models/connection';
import { Member } from '../models/member';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MemberQuery } from '../dtoQuery/memberQuery';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  connectedMemberSub = new Subject<Member>();



  constructor(private http: HttpClient, private _router: Router) { }

  /**
   * Connexion de l'utilisateur.
   * Le serveur provoque la création du cookie AUTH-TOKEN.
   */
  connect(connect: Connection) {
return this.http.post(`${environment.baseUrl}api/login`, connect);
  }

    /**
   * renvoie les informations du connected member.
   * Le serveur provoque la création du cookie AUTH-TOKEN.
   */
  isAuth() {
   return this.http.get<Member>(`${environment.baseUrl}api/members/me`, { withCredentials: true });
  }

   /**
   * renvoie les informations du connected member.
   * Le serveur provoque la création du cookie AUTH-TOKEN.
   */
  register(memberQuery: MemberQuery) {
    return this.http.post<Member>(`${environment.baseUrl}api/members`, memberQuery);
   }


   logout(){
    return this.http.get(`${environment.baseUrl}logout`);
   }



  // get set subject

  sendToMemberSub(member: Member) {
    this.connectedMemberSub.next(member)
  }

  getFromConnectedMemberSub() {
    return this.connectedMemberSub.asObservable();
  }




}
