import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Member } from './models/member';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meteo-front';
  connectedMember: Member;
  urlCourant: any;

  constructor(private loginSrv: LoginService, private router: Router) {

  }
  /**
   * check auth and update memberSubject
   */
  ngOnInit(): void {
    this.loginSrv.isAuth().subscribe(
      data => this.loginSrv.sendToMemberSub(new Member(data))
    )
  }





}
