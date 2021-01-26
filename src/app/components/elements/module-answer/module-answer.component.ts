import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { Member } from 'src/app/models/member';
import { Subject } from 'src/app/models/subject';

@Component({
  selector: 'app-module-answer',
  templateUrl: './module-answer.component.html',
  styleUrls: ['./module-answer.component.css']
})
export class ModuleAnswerComponent implements OnInit {
  @Input() answer:Answer;
  @Input() connectedMember: Member;
  @Input() subject: Subject;
  constructor() { }

  ngOnInit(): void {
  }

}
