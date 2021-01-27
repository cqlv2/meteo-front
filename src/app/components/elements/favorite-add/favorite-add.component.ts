import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CityService } from 'src/app/services/city.service';
import { City } from 'src/app/models/city';
import { Favorite } from 'src/app/models/favorite';
import { FavoriteService } from 'src/app/services/favorite.service';
import { Member } from 'src/app/models/member';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-favorite-add',
  templateUrl: './favorite-add.component.html',
  styleUrls: ['./favorite-add.component.css']
})
export class FavoriteAddComponent implements OnInit {

  cities: City[];
  citySearched: string;
  city: City;
  showMinMax: boolean = true;
  showHumidity: boolean = true;
  showPressure: boolean = true;
  showWind: boolean = true;
  showPM10: boolean = true;
  showPM25: boolean = true;
  showNO2: boolean = true;
  showO3: boolean = true;

  showWeather: boolean = true;
  showPolluants: boolean = true;
  connectedMember: Member;

  constructor(private location: Location, private citySrv: CityService, private favoriteSrv: FavoriteService, private loginSrv: LoginService) { }

  ngOnInit(): void {
    this.loginSrv.isAuth().subscribe(
      data => {
        this.loginSrv.sendToMemberSub(data);
        this.connectedMember = data;
      },
      err => console.log(err)
    );


    this.citySrv.getCities().subscribe(
      data => this.cities = data,
      err => console.log(err)
    );
  }

  locationBack() {
    this.location.back();
  }


  checkCity() {
    this.city = this.cities.find(city => city.cityName === this.citySearched);
  }

  validate() {
    
    if (this.connectedMember.favorites.find(favorite => favorite.cityDtoResponse.cityName === this.citySearched) == null) {
      var favorite = new Favorite({});
      favorite.showWeather = this.showWeather;
      favorite.showPolluants = this.showPolluants;

      if (this.showNO2) favorite.polluants.push("NO2");
      if (this.showO3) favorite.polluants.push("O3");
      if (this.showPM10) favorite.polluants.push("PM10");
      if (this.showPM25) favorite.polluants.push("PM25");


      if (this.showMinMax) favorite.infoWeather.push("MIN_MAX");
      if (this.showHumidity) favorite.infoWeather.push("HUMIDITY");
      if (this.showPressure) favorite.infoWeather.push("PRESSURE");
      if (this.showWind) favorite.infoWeather.push("INFO_WIND");

      favorite.villeId = this.city.id;
      favorite.memberId = this.connectedMember.id;
      this.favoriteSrv.createFavorite(favorite).subscribe(
        () => { this.location.back() },
        err => console.log(err)
      );
      console.log(favorite);
    } else {
      console.log("city is already in favorites list");

    }


  }


  switchOff() {
    if (!this.showWeather) {
      this.showMinMax = false;
      this.showHumidity = false;
      this.showPressure = false;
      this.showWind = false;
    }
    if (!this.showPolluants) {
      this.showPM25 = false;
      this.showNO2 = false;
      this.showPM10 = false;
      this.showO3 = false;
    }
  }

  weatherSwitchOn() {
    this.showWeather = true;
  }


  polluantsSwitchOn() {
    this.showPolluants = true;
  }

}
