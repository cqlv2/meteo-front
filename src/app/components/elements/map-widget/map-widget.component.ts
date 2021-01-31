import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-map-widget',
  templateUrl: './map-widget.component.html',
  styleUrls: ['./map-widget.component.css']
})
export class MapWidgetComponent implements OnInit {
  myfrugalmap: any;
  zoomLevel = 5;
  @Input() cities: City[];

  constructor(private citySrv: CityService) { }
  
  ngOnInit(): void {
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    this.myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], this.zoomLevel);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(this.myfrugalmap);
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    var markersCluster = new L.MarkerClusterGroup();
    this.cities.forEach(city => {
      var latLng = new L.LatLng(city.latitude, city.longitude);
      var marker = new L.Marker(latLng, { title: city.cityName });
      marker.addEventListener('click', () => this.citySrv.sendToCitySubject(city));
      markersCluster.addLayer(marker);
    });
    markersCluster.addTo(this.myfrugalmap);
  }
}
