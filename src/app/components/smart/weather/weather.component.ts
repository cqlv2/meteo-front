import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { Member } from 'src/app/models/member';
import { CityService } from 'src/app/services/city.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  cities: City[];
  constructor(private loginSrv: LoginService, private cityService: CityService) {}

  ngOnInit(): void {
    this.loginSrv.isAuth().subscribe(
      data => this.loginSrv.sendToMemberSub(new Member(data)),
      err => this.loginSrv.sendToMemberSub(null)
    )
    this.cityService.getCities().subscribe(
      data => {
        this.cityService.sendToCityListSubject(data);

        this.cityService.getFromCityListSubject().subscribe(
          a=>console.log(a)
        )
        this.cities = data;
      },
      err => console.log(err),      
    );
  }
}
