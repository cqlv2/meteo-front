import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/models/answer';
import { Member } from 'src/app/models/member';
import { Subject } from 'src/app/models/subject';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-module-answer',
  templateUrl: './module-answer.component.html',
  styleUrls: ['./module-answer.component.css']
})
export class ModuleAnswerComponent implements OnInit {
  @Input() answer: Answer;
  @Input() connectedMember: Member;
  @Input() subject: Subject;
  editAnswer:boolean=false;
  newContain:string;
  
  
  constructor(private answerSvr:AnswerService, private router :Router) { }

  ngOnInit(): void {
  }


  activeForm() {
    this.editAnswer=true;
    this.newContain=this.answer.contain;
  }
  editContain(){
    this.answerSvr.editContain(this.answer.id, this.newContain).subscribe(
      ()=>{
        this.answer.contain=this.newContain
        this.editAnswer=false;
        this.newContain=null;
      },
      err=>console.log(err)
    );
  }
  deleteAnswer() {
    this.answerSvr.deleteAnswer(this.answer.id).subscribe(
      ()=>this.subject.answers.splice(this.subject.answers.indexOf(this.answer),1), 
      err=>console.log(err)
    );
  }
}
