import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

member: Member;

  constructor(private loginServ :LoginService) { }

  ngOnInit(): void {
    // this.loginServ.isAuth().subscribe(
    //   data=>this.member=new Member(data)
    // );
     
    this.loginServ.getFromConnectedMemberSub().subscribe(
      connectedMember=>this.member=connectedMember
    );

    
  }

}
