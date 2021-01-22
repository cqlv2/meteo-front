import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-module-comment',
  templateUrl: './module-comment.component.html',
  styleUrls: ['./module-comment.component.css']
})
export class ModuleCommentComponent implements OnInit {

  @Input() comment:Comment;
  constructor() { }

  ngOnInit(): void {
  }

}
