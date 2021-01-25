import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member';
import { Subject } from 'src/app/models/subject';
import { LoginService } from 'src/app/services/login.service';
import { SubjectService } from 'src/app/services/subject.service';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subject: Subject;
  connectedMember: Member;
  constructor(private loginSrv: LoginService, private activatedRoute: ActivatedRoute, private subjectSrv: SubjectService) { }

  ngOnInit(): void {
    this.loginSrv.isAuth().subscribe(
      data => {
        this.loginSrv.sendToMemberSub(new Member(data))
        this.connectedMember = data;
      },
      err=>this.loginSrv.sendToMemberSub(null)
    );
    this.subjectSrv.getSubjectById(this.activatedRoute.snapshot.paramMap.get("id")).subscribe(
      data => this.subject = data,
      err => console.log(err) 
    );

  }


}
