import { Component, Input, OnInit } from '@angular/core';
import { Polluant } from 'src/app/models/polluant';

@Component({
  selector: 'app-polluant-widget',
  templateUrl: './polluant-widget.component.html',
  styleUrls: ['./polluant-widget.component.css']
})
export class PolluantWidgetComponent implements OnInit {

  @Input()
  polluant: Polluant;
  rateColor:string;
  constructor() { }

  ngOnInit(): void {

    if(this.polluant.rate<=50) this.rateColor ="bg-success";
    if(this.polluant.rate>50 && this.polluant.rate<=150) this.rateColor = "bg-warning"
    if(this.polluant.rate>150 && this.polluant.rate<=300) this.rateColor = "bg-danger"
    if(this.polluant.rate>300 && this.polluant.rate<=500)  this.rateColor ="bg-dark"

  }

}
