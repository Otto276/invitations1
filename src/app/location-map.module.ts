// app.module.ts o location-map.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { LocationMapComponent } from './location-map/location-map.component';

@NgModule({
  declarations: [
    LocationMapComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [LocationMapComponent] // o tu componente principal
})
export class AppModule { }
