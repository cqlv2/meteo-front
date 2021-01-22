import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer';

@Component({
  selector: 'app-module-answer',
  templateUrl: './module-answer.component.html',
  styleUrls: ['./module-answer.component.css']
})
export class ModuleAnswerComponent implements OnInit {
  @Input() answer:Answer;
  constructor() { }

  ngOnInit(): void {
  }

}
