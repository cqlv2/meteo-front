import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { Weather } from 'src/app/models/weather';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-infos',
  templateUrl: './city-infos.component.html',
  styleUrls: ['./city-infos.component.css']
})
export class CityInfosComponent implements OnInit {

  city: City; //ville rechercher

  constructor(private citySrv: CityService) { }

  ngOnInit(): void {
    this.citySrv.getFromCitySubject().subscribe(
      data => this.city = data,
      err => console.log(err)
    );
  }
}