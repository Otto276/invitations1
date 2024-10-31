import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { SimpleComponent } from './simple/simple.component';
import { CountdownComponent } from './countdown-component/countdown-component.component';
import { LocationMapComponent } from './location-map/location-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CountdownComponent, LocationMapComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fecha';
  
}
function scheduleReminder() {
    
}

function seeLocation(){

}
function verDatos(){

}
function SendReply(){

}