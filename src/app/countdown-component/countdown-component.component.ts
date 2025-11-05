import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';


@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown-component.component.html',
  styleUrls: ['./countdown-component.component.scss'],
})
export class CountdownComponent implements OnInit, OnDestroy {
  targetDate: Date = new Date('2025-12-31T23:00:00Z');
  intervalId: any;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    this.clearInterval();
  }

  startCountdown() {
    if (!isPlatformBrowser(this.platformId)) {
      return; // No ejecuta el intervalo en el servidor
    }

    this.updateCountdown(); // Llamada inicial para calcular valores inmediatamente
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
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
      this.resetCountdown();
    }
  }

  resetCountdown() {
    this.days = this.hours = this.minutes = this.seconds = 0;
    this.clearInterval();
  }

  setTargetDate(newDate: Date) {
    this.targetDate = newDate;
    this.clearInterval();
    this.startCountdown();
  }

  clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}