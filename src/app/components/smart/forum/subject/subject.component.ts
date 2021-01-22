import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'src/app/models/subject';
import { SubjectService } from 'src/app/services/subject.service';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subject: Subject;

  constructor(private activatedRoute: ActivatedRoute, private subjectSrv: SubjectService) { }

  ngOnInit(): void {

    this.subjectSrv.getSubjectById(this.activatedRoute.snapshot.paramMap.get("id")).subscribe(
      data => this.subject = data,
      err => console.log(err) 
    );

  }


}
