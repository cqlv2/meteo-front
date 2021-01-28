import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { Subject } from 'src/app/models/subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-module-subject',
  templateUrl: './module-subject.component.html',
  styleUrls: ['./module-subject.component.css']
})
export class ModuleSubjectComponent implements OnInit {
  @Input() subject:Subject;
  @Input() connectedMember: Member;


  constructor(private subjectSrv : SubjectService) { }

  ngOnInit(): void {
  }

  editSubject() {

  }

  deleteSubject(subject : Subject) {
    this.subjectSrv.deleteSubject(subject.id).subscribe(
      ok => console.log("ok"),
      ko => console.log("ko")
    )
    }

}
