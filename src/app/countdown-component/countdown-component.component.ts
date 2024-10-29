import { Component, OnInit, OnDestroy } from '@angular/core';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown-component.component.html',
  styleUrls: ['./countdown-component.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  targetDate: Date = new Date('2025-02-23T00:00:00'); // Nueva fecha objetivo
  private intervalId: any;

  ngOnInit() {
    this.updateCountdown();
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown() {
    const now = new Date();
    const distance = this.targetDate.getTime() - now.getTime();

    if (distance > 0) {
      this.days = differenceInDays(this.targetDate, now);
      this.hours = differenceInHours(this.targetDate, now) % 24;
      this.minutes = differenceInMinutes(this.targetDate, now) % 60;
      this.seconds = differenceInSeconds(this.targetDate, now) % 60;
    } else {
      // Si la cuenta regresiva ha terminado
      this.days = this.hours = this.minutes = this.seconds = 0;
      clearInterval(this.intervalId); // Detener el intervalo
    }
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
