import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { Comment } from 'src/app/models/comment';
import { Member } from 'src/app/models/member';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-module-comment',
  templateUrl: './module-comment.component.html',
  styleUrls: ['./module-comment.component.css']
})
export class ModuleCommentComponent implements OnInit {

  @Input() comment: Comment;
  @Input() answer: Answer;
  editActive: boolean = false;
  newContain: string;
  @Input() connectedMember: Member;


  constructor(private commentSrv: CommentService) { }

  ngOnInit(): void {
  }

  activeForm() {
    this.editActive = true;
    this.newContain = this.comment.contain;
  }

  editComment() {
    this.commentSrv.editContain(this.comment.id, this.newContain).subscribe(
      () => {
        this.comment.contain = this.newContain;
        this.editActive = false;
        this.newContain = null;
      },
      err => console.log(err)

    );
  }

  deleteComment() {
    if(confirm("Are you sure ?")){
      this.commentSrv.deleteComment(this.comment.id).subscribe(
        () => {
          this.answer.comments.splice(this.answer.comments.indexOf(this.comment), 1);
        },
        err => console.log(err)
        
      )
    }
  }

}
