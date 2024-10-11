import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown-component.component.html',
  styleUrls: ['./countdown-component.component.scss']
})
export class CountdownComponent{
  // Variables para mostrar días, horas, minutos y segundos
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  targetDate: Date = new Date('2024-12-25T00:00:00'); // Fecha objetivo (puedes cambiarla)

  ngOnInit() {
    this.updateCountdown();
    setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
}
