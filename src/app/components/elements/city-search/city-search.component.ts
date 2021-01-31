import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {

  error: string;
  @Input()cities: City[];
  citySearched: string;

  constructor(private citySrv: CityService) { }

  ngOnInit(): void {
this.citySrv.getFromCitySubject().subscribe(
  data=>this.citySearched=data.cityName,
  err=>console.log(err)  
);

   }

  checkCity() {
    if (this.cities.find(city => city.cityName === this.citySearched)) {
      this.error =null;
      this.citySrv.sendToCitySubject(this.cities.find(city => city.cityName === this.citySearched));
    } else
      this.error = "city not found !"
  }
}
