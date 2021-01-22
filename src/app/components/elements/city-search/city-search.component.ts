import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {

  @Input()
  cities: City[];

  citySearched: string = null;

  constructor(private citySrv: CityService) { }

  ngOnInit(): void {
  }

  checkCity(){
    this.citySrv.sendToCitySubject(this.cities.find(city => city.cityName === this.citySearched));
    console.log("ville recherchée : " + this.citySearched);
  }
}
