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
  loadingImg:string = "https://i.pinimg.com/originals/9b/4d/3f/9b4d3f25ca2e77f9ecba5d959463756b.gif";

  constructor(private loginSrv: LoginService, private cityService: CityService) { }

  ngOnInit(): void {
    this.loginSrv.isAuth().subscribe(
      data => this.loginSrv.sendToMemberSub(new Member(data)),
      err => this.loginSrv.sendToMemberSub(null)
    )
    this.cityService.getCities().subscribe(
      data => this.cities = data,
      err => console.log(err),
      ()=>console.log("done!")
      
      );
  }
}
