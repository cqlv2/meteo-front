import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-infos-city-widget',
  templateUrl: './infos-city-widget.component.html',
  styleUrls: ['./infos-city-widget.component.css']
})
export class InfosCityWidgetComponent implements OnInit {

  @Input()
  city: City;

  constructor() { }

  ngOnInit(): void {
  }

}
