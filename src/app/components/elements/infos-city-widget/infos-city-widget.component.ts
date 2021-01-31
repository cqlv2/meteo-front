import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-infos-city-widget',
  templateUrl: './infos-city-widget.component.html',
  styleUrls: ['./infos-city-widget.component.css']
})
export class InfosCityWidgetComponent implements OnInit {

  @Input()
  city: City;

  constructor(private aze:CityService) { }

  ngOnInit(): void {
    console.log("lkdhflkdsqjfldskj");
    
setTimeout(() => {
  this.aze.getFromCityListSubject().subscribe(a=>console.log(a))
}, 1000);





  }

}
