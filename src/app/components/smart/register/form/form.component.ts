import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberQuery } from 'src/app/dtoQuery/memberQuery';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  MemberReq: MemberQuery = new MemberQuery();
  confirm: string;

  constructor(private loginServ: LoginService, private router: Router, ) { }

  ngOnInit(): void {
  }



  register() {
    console.log(this.MemberReq);
    if (!this.MemberReq.roleId) {
      this.MemberReq.roleId = 1;
    }
    this.loginServ.register(this.MemberReq).subscribe(
      ok => this.router.navigate(['/register/state']),
      ko => this.router.navigate(['/error500'])
    );
  }



}
