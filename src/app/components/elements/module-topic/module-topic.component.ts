import { Component, Input, OnInit } from '@angular/core';
import { Topic } from 'src/app/models/topic';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-module-topic',
  templateUrl: './module-topic.component.html',
  styleUrls: ['./module-topic.component.css']
})
export class ModuleTopicComponent implements OnInit {
  @Input() topicId:number;
  topic: Topic;
  constructor(private topicSrv:TopicService) { }

  ngOnInit(): void {
      this.topicSrv.getTopicById(this.topicId).subscribe(
        data => this.topic = data,
        ko => console.log(ko)
      );
  }


}
