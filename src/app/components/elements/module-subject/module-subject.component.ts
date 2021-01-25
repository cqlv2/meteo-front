import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { Subject } from 'src/app/models/subject';

@Component({
  selector: 'app-module-subject',
  templateUrl: './module-subject.component.html',
  styleUrls: ['./module-subject.component.css']
})
export class ModuleSubjectComponent implements OnInit {
  @Input() subject:Subject;
  @Input() connectedMember: Member;


  constructor() { }

  ngOnInit(): void {
  }

}
