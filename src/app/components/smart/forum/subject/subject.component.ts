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

  subjectId: string;
  subject: Subject;

  constructor(private activatedRoute: ActivatedRoute, private subjectSrv: SubjectService) { }

  ngOnInit(): void {

    this.subjectId = this.activatedRoute.snapshot.paramMap.get("id");
    this.subjectSrv.getSubjectById(this.subjectId).subscribe(
      data => this.subject = data,
      err => console.log(err) 
    );

  }


}
