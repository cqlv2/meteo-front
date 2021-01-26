import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { Comment } from 'src/app/models/comment';
import { Member } from 'src/app/models/member';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-form-module',
  templateUrl: './comment-form-module.component.html',
  styleUrls: ['./comment-form-module.component.css']
})
export class CommentFormModuleComponent implements OnInit {

  @Input() connectedMember: Member;
  @Input() message: Answer | Comment;
  commentContain: string;


  constructor(private commentSrv: CommentService) { }

  ngOnInit(): void {
  }

  createComment(){
    var comment = new Comment({
      "contain": this.commentContain,
      "memberId": this.connectedMember.id,
      "originId": this.message.id
    });
    this.commentSrv.createComment(comment).subscribe(
      data => {
        this.message.comments.push(data);
        this.commentContain = null;
      },
      err => console.log(err)
    );
  }

}
