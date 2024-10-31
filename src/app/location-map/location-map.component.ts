// location-map.component.ts
import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-location-map',
  standalone: true,
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.scss']
})
export class LocationMapComponent implements OnInit {
  latitude: number = 20.6667; // Coordenadas de ejemplo (Guadalajara, Jalisco)
  longitude: number = -103.3333; // Coordenadas de ejemplo
  zoom: number = 12;

  constructor() {}

  ngOnInit(): void {}

  seeLocation(lat: number, lng: number) {
    this.latitude = lat;
    this.longitude = lng;
  }
}
