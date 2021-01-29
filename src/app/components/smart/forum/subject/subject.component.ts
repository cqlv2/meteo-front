import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  editSubLabel: boolean = false;
  newSubLabel: string;

  constructor(private loginSrv: LoginService, private activatedRoute: ActivatedRoute, 
    private subjectSrv: SubjectService, private location:Location) { }

  ngOnInit(): void {
    this.loginSrv.isAuth().subscribe(
      data => {
        this.loginSrv.sendToMemberSub(new Member(data))
        this.connectedMember = data;
      },
      err => this.loginSrv.sendToMemberSub(null)
    );
    this.subjectSrv.getSubjectById(this.activatedRoute.snapshot.paramMap.get("id")).subscribe(
      data => this.subject = data,
      err => console.log(err)
    );

  }

  activeForm() {
    this.newSubLabel = this.subject.label;
    this.editSubLabel = true
  }
  editLabel() {
    this.subjectSrv.editLabel(this.subject.id, this.newSubLabel).subscribe(
      () => {
        this.subject.label = this.newSubLabel
        this.newSubLabel = null;
        this.editSubLabel = false
      },
      err => console.log(err)
    );
  }
  cancelEditSubLabel() {
    this.newSubLabel = null;
    this.editSubLabel = false
  }
  deleteSubject() {
    if(confirm("delete this post and all it contains ?")){
      this.subjectSrv.deleteSubject(this.subject.id).subscribe(
        ()=>{
          this.location.back()
        },
        err=>console.log(err)
      );
    }
  }

}
