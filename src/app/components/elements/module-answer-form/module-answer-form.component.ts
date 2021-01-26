import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { Member } from 'src/app/models/member';
import { Subject } from 'src/app/models/subject';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-module-answer-form',
  templateUrl: './module-answer-form.component.html',
  styleUrls: ['./module-answer-form.component.css']
})
export class ModuleAnswerFormComponent implements OnInit {

  answerContain: string;
  @Input() subject: Subject;
  @Input() connectedMember: Member;
  

  constructor(private answerSrv: AnswerService) { }

  ngOnInit(): void {
  }

  createAnswer(){
    var answer = new Answer({
      "contain": this.answerContain,
      "subjectId": this.subject.id,
      "memberId": this.connectedMember.id
    });
    this.answerSrv.createAnswer(answer).subscribe(
      data => {
        this.subject.answers.push(data);
        this.answerContain = null;
      }, 
      err => console.log(err)
      );
  }



}
