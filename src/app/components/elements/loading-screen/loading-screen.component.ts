import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit {

  constructor() { }

  loadingImg: string = "https://i.pinimg.com/originals/9b/4d/3f/9b4d3f25ca2e77f9ecba5d959463756b.gif";


  ngOnInit(): void {
  }

}
