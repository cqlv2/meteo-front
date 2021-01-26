import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/models/answer';
import { Member } from 'src/app/models/member';
import { Subject } from 'src/app/models/subject';
import { Topic } from 'src/app/models/topic';
import { AnswerService } from 'src/app/services/answer.service';
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
  displayTopicForm = false;
  displaySubjectForm = false;
  topicName: string;
  subjectName: string;
  firstAnswer: string;
  topicToAdd:number;
  
  constructor(private answerSrv: AnswerService, private subjectSrv: SubjectService, private topicSrv: TopicService, private loginSrv: LoginService, private router:Router) {}
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

  displayTopicFormToTrue(){
    this.displayTopicForm = true;
  }

  displayFormSubject(id:number) {
   this.topicToAdd=id;
    this.displaySubjectForm = true;
  }

  createTopic(){
    var topic = new Topic({"label": this.topicName, "memberId": this.connectedMember.id});
    this.topicSrv.addTopic(topic).subscribe(
      data => this.topicList.push(data),
      err => console.log(err)
    );
    this.displayTopicForm = false;    
  }


  createSubject(topicId:number){
    var topic : Topic = null;
    // creation du nouveau sujet
    var subject = new Subject({"label": this.subjectName, "topicId": topicId, "memberId" : this.connectedMember.id})
    //  ajout du sujet en basse de donnee
    this.subjectSrv.createSubject(subject).subscribe(
      data=>{
        //creation de la premiere reponse
        var firstAnswer = new Answer({
          "contain":this.firstAnswer,
          "memberId":this.connectedMember.id,
          "subjectId":data.id,
        });
        //ajout de la premiere reponse
        this.answerSrv.createAnswer(firstAnswer).subscribe(
          data2=>{
            this.router.navigateByUrl("/forum/subjects/"+data.id)
          },
          err=>console.log(err)
        );

      },
      err=>console.log(err)
   );
   
    //creation de la premiere reponse
    
   
    this.subjectSrv.createSubject(subject).subscribe(
      data => {
        this.topicList.forEach(t => {
          if(t.id === topicId) topic = t;
        });
        topic.subjects.push(data);
        this.displaySubjectForm = false; 
      }
    )
  }

}
