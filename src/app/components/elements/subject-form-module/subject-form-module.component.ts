import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/models/answer';
import { Member } from 'src/app/models/member';
import { Subject } from 'src/app/models/subject';
import { Topic } from 'src/app/models/topic';
import { AnswerService } from 'src/app/services/answer.service';
import { LoginService } from 'src/app/services/login.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-form-module',
  templateUrl: './subject-form-module.component.html',
  styleUrls: ['./subject-form-module.component.css']
})
export class SubjectFormModuleComponent implements OnInit {

  subjectName:string;
  firstAnswer:string;
  @Input() connectedMember:Member;
  @Input() topic:Topic;
  @Output() displaySubjectForm = new EventEmitter<boolean>();

  constructor(private answerSrv:AnswerService, private subjectSrv : SubjectService, private loginSrv:LoginService, private router:Router) { }

  ngOnInit(): void {

  }

  createSubject(){
    // creation du nouveau sujet
    var subject = new Subject({"label": this.subjectName, "topicId": this.topic.id, "memberId" : this.connectedMember.id})
    //  ajout du sujet en basse de donnee
    this.subjectSrv.createSubject(subject).subscribe(
      data=>{
        //creation de la premiere reponse
        var firstAnswer = new Answer({
          "contain":this.firstAnswer,
          "memberId":this.connectedMember.id,
          "subjectId":data.id,
        });
        //ajout de la premiere reponse
        this.answerSrv.createAnswer(firstAnswer).subscribe(
          data2=>{
            this.router.navigateByUrl("/forum/subjects/"+data.id)
          },
          err=>console.log(err)
        );

      },
      err=>console.log(err)
   );
  }

  cancelSubject() {
    console.log("enfant");
    this.displaySubjectForm.emit(false)
  }
}
