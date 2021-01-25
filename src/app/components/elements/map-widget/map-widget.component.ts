import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { City } from 'src/app/models/city';


@Component({
  selector: 'app-map-widget',
  templateUrl: './map-widget.component.html',
  styleUrls: ['./map-widget.component.css']
})
export class MapWidgetComponent implements OnInit {
  myfrugalmap: any;
  zoomLevel = 5;
  @Input() cities : City[];
  constructor() { }

  ngOnInit(): void {
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    this.myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], this.zoomLevel);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(this.myfrugalmap);

    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    this.cities.forEach(city => {
      L.marker([city.latitude, city.longitude], { icon: myIcon }).bindPopup("plop").addTo(this.myfrugalmap).openPopup();
    });
  
  console.log(this.myfrugalmap);
  
  
  }

}
