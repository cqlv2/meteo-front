import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { Topic } from 'src/app/models/topic';
import { AnswerService } from 'src/app/services/answer.service';
import { LoginService } from 'src/app/services/login.service';
import { SubjectService } from 'src/app/services/subject.service';
import { TopicService } from 'src/app/services/topic.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  topicList: Topic[];
  connectedMember: Member;
  displayTopicForm = false;
  displaySubjectForm = false;
  topicName: string;
  subjectName: string;
  firstAnswer: string;
  topicToAdd: number;
  closeResult = '';
  newLabel: string;

  constructor(private modalService: NgbModal, private answerSrv: AnswerService, private subjectSrv: SubjectService, private topicSrv: TopicService, private loginSrv: LoginService, private router: Router) { }
  ngOnInit(): void {



    this.loginSrv.isAuth().subscribe(
      data => {
        this.loginSrv.sendToMemberSub(new Member(data))
        this.connectedMember = data;
      },
      err => this.loginSrv.sendToMemberSub(null)
    );
    this.topicSrv.getTopics().subscribe(
      ok => {
        this.topicList = ok;
      },
      ko => console.log(ko),
    );

  }

  displayTopicFormToTrue() {
    this.displayTopicForm = true;
  }

  displayFormSubject(id: number) {
    this.topicToAdd = id;
    this.displaySubjectForm = true;
  }

  createTopic() {
    var topic = new Topic({ "label": this.topicName, "memberId": this.connectedMember.id });
    this.topicSrv.addTopic(topic).subscribe(
      data => {
        this.topicList.push(data);
        this.topicName = null;
      },
      err => console.log(err)
    );
    this.displayTopicForm = false;
  }

  cancelSubject(bool: boolean) {
    this.displaySubjectForm = bool;
  }

  editTopic(id : number) {
    this.topicSrv.updateTopic(id, this.newLabel).subscribe(
      () => {this.topicSrv.getTopics().subscribe(
        data => this.topicList = data
      )},
      err => console.log(err)
    );
  }

  deleteTopic(topic: Topic) {
    if (confirm("ARE YOU SURE ?")) {
      this.topicSrv.deleteTopic(topic.id).subscribe(
        () => this.topicList.splice(this.topicList.indexOf(topic), 1),
        ko => console.log(ko)
      );
    }
  }

  open(content, topic:Topic) {
    this.newLabel = topic.label;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      if (result === 'Save click') {
        this.editTopic(topic.id);
      }
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
