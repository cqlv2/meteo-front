import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Member } from 'src/app/models/member';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginSrv: LoginService, private router:Router) { }

  ngOnInit(): void {

    this.loginSrv.logout().subscribe(
      ()=>{
        this.loginSrv.sendToMemberSub(null);
        this.router.navigateByUrl("/");
      },
      err=>console.log(err)
    );




    this.loginSrv.isAuth().subscribe(
      data => this.loginSrv.sendToMemberSub(new Member(data)),
      err=>this.loginSrv.sendToMemberSub(null)
    )
  }

}
