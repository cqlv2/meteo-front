import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

member: Member;

  constructor(private loginServ :LoginService, private router:Router) { }

  ngOnInit(): void {
    this.loginServ.getFromConnectedMemberSub().subscribe(
      connectedMember=>this.member=connectedMember
    );  
  }

  logout(){
    this.loginServ.logout().subscribe(
      ()=>{
        this.loginServ.sendToMemberSub(null);
        this.router.navigateByUrl('/')
      },
      err=>console.log(err)
      
    );
  }
}
