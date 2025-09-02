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
  showModal: boolean = true;
  title = 'Fecha';
  attendanceForm: FormGroup;
  showBankingInfo = false;

  constructor(private fb: FormBuilder) {
    this.attendanceForm = this.fb.group({
      attendance: ['', Validators.required],
      nombre: ['', Validators.required],
      mensaje: ['']
    });
  }

  startMusic(shouldPlay: boolean) {
    this.showModal = false;
    if (shouldPlay) {
      const audioPlayer = document.querySelector('audio') as HTMLAudioElement;
      audioPlayer?.play();
    }
  }

  toggleBankingInfo(): void {
    this.showBankingInfo = !this.showBankingInfo;
  }

  openInGoogleMaps(): void {
    const url = `https://maps.app.goo.gl/Zn3LuBtHbmfjgjmi9?g_st=aw`;
    window.open(url, '_blank');
  }

  openInGoogleMapsD(): void {
    const url = `https://maps.app.goo.gl/zVTSDEaNg4bAQEDR9`;
    window.open(url, '_blank');
  }

  onSubmit(): void {
    const url = `https://forms.gle/eqvdCrytRSmGkyGv8`;
    window.open(url, '_blank');
  }

  // 👉 Nuevo método para abrir WhatsApp
  openWhatsApp(): void {
    const phoneNumber = '5213325520631'; // cambia por tu número en formato internacional
    const message = encodeURIComponent('¡Hola! Me gustaría confirmar mi asistencia.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }
}
