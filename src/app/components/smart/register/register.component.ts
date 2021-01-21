import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MemberQuery } from 'src/app/dtoQuery/memberQuery';
import { Member } from 'src/app/models/member';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  display: boolean;


  constructor(private loginServ: LoginService, private location: Location) { }

  ngOnInit(): void {
    this.display = false;
    this.loginServ.isAuth().subscribe(
      data => {
        this.loginServ.sendToMemberSub(new Member(data));
        this.location.back();
      },

      err => {
        this.loginServ.sendToMemberSub(null);
        this.display = true;
      }
    )
  }




}
