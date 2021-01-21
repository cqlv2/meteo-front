import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Connection } from 'src/app/models/connection';
import { Member } from 'src/app/models/member';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  connect: Connection = new Connection();
  rememberMe?: boolean = false

  errMessages: string[] = [];

  display: boolean = false;

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

  connection() {
    this.errMessages = [];
    if (this.connect.username == "" || this.connect.password == "") {
      if (this.connect.username == "") this.errMessages.push("userName is required");
      if (this.connect.password == "") this.errMessages.push("password is required");
    }
    else {
      this.loginServ.connect(this.connect).subscribe(
        ok => {
          this.loginServ.isAuth().subscribe(
            data => { 
              this.loginServ.sendToMemberSub(new Member(data));
              this.location.back();
            }
          );
        },
        ko => this.errMessages.push("invalid credential")
      );


    }
  }


}
