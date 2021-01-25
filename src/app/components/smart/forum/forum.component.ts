import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  constructor(private loginSrv: LoginService) { }

  ngOnInit(): void {
    this.loginSrv.isAuth().subscribe(
      data => this.loginSrv.sendToMemberSub(new Member(data)),
      err=>this.loginSrv.sendToMemberSub(null)
    );
  }

}
