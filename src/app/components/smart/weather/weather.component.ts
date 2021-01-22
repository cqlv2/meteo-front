import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { Member } from 'src/app/models/member';
import { CityService } from 'src/app/services/city.service';
import { LoginService } from 'src/app/services/login.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  cities: City[];
  myfrugalmap: any;
  zoomLevel = 5;

  constructor(private loginSrv: LoginService, private cityService: CityService) { }

  ngOnInit(): void {
    this.loginSrv.isAuth().subscribe(
      data => this.loginSrv.sendToMemberSub(new Member(data)),
      err => this.loginSrv.sendToMemberSub(null)
    )
    this.cityService.getCities().subscribe(
      data => {
        this.cities = data,
           // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
        this.myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], this.zoomLevel);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: 'Frugal Map'
        }).addTo(this.myfrugalmap);



        const myIcon = L.icon({
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
        });
        //TODO mettre à jour les coordonées
        // data.forEach(city => {
        //   L.marker([city.latitude, city.longitude], { icon: myIcon }).bindPopup("plop").addTo(this.myfrugalmap).openPopup();
        // });
      },
      err => console.log(err)


    );






  }

}
