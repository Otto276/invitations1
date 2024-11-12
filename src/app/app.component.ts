import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CountdownComponent } from './countdown-component/countdown-component.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CountdownComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fecha';
  attendanceForm: FormGroup;
  showBankingInfo = false;

  constructor(
    private fb: FormBuilder,
  ) {
    this.attendanceForm = this.fb.group({
      attendance: ['', Validators.required],
      nombre: ['', Validators.required],
      mensaje: ['']
    });
  }

  toggleBankingInfo(): void {
    this.showBankingInfo = !this.showBankingInfo;
  }

  openInGoogleMaps(): void {
    const url = `https://maps.app.goo.gl/4ieSj8TJUhregHtp9`;
    window.open(url, '_blank');
  }

  onSubmit(): void {
    const url = `https://forms.gle/eqvdCrytRSmGkyGv8`;
    window.open(url, '_blank');
  }
}
