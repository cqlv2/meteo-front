import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { Subject } from 'src/app/models/subject';
import { Topic } from 'src/app/models/topic';
import { LoginService } from 'src/app/services/login.service';
import { SubjectService } from 'src/app/services/subject.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  topicList: Topic[];
  connectedMember : Member;
  displayForm =false;
  topicName: string;
  subjectName: string;
  
  constructor(private subjectSrv: SubjectService, private topicSrv: TopicService, private loginSrv: LoginService) {}
  ngOnInit(): void {
    this.loginSrv.isAuth().subscribe(
      data => {
        this.loginSrv.sendToMemberSub(new Member(data))
        this.connectedMember = data;

      },
      err=>this.loginSrv.sendToMemberSub(null)
    );
    this.topicSrv.getTopics().subscribe(
      ok => {
        this.topicList = ok;
      },
      ko => console.log(ko),
    );

  }

  displayFormToTrue(){
    this.displayForm = true;
  }

  createTopic(){
    var topic = new Topic({"label": this.topicName, "memberId": this.connectedMember.id});
    this.topicSrv.addTopic(topic).subscribe(
      data => this.topicList.push(data),
      err => console.log(err)
    );
    this.displayForm = false;    
  }


  createSubject(topicId:number){
    var topic : Topic = null;
    var subject = new Subject({"label": this.subjectName, "topicId": topicId, "memberId" : this.connectedMember.id})
    this.subjectSrv.createSubject(subject).subscribe(
      data => {
        this.topicList.forEach(t => {
          if(t.id === topicId) topic = t;
        });
        topic.subjects.push(data);
      }
    )
  }

}
