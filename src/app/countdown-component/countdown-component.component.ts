import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown-component.component.html',
  styleUrls: ['./countdown-component.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  targetDate: Date = new Date('2025-02-23T17:00:00Z');
  intervalId: any;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateCountdown();
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => this.updateCountdown());
      }, 1000);
    });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
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
    this.cdr.detectChanges(); // Agrega esto para que el cambio se detecte y se actualice la vista
  }

  resetCountdown() {
    this.days = this.hours = this.minutes = this.seconds = 0;
    clearInterval(this.intervalId);
  }

  setTargetDate(newDate: Date) {
    this.targetDate = newDate;
    this.updateCountdown();
  }
}
