import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-gestion-favorite',
  templateUrl: './gestion-favorite.component.html',
  styleUrls: ['./gestion-favorite.component.css']
})
export class GestionFavoriteComponent implements OnInit {

  constructor(private loginSrv: LoginService) { }

  ngOnInit(): void {
    this.loginSrv.isAuth().subscribe(
      data => this.loginSrv.sendToMemberSub(new Member(data)),
      err=>this.loginSrv.sendToMemberSub(null)
    )
  }

}
