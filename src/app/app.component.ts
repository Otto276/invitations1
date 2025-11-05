import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
export class AppComponent implements AfterViewInit {
  showModal: boolean = true;
  title = 'Fecha';
  attendanceForm: FormGroup;
  showBankingInfo = false;

  // 🎵 referencias al reproductor
  @ViewChild('audioPlayer') audioRef!: ElementRef<HTMLAudioElement>;
  @ViewChild('iconPlay') iconPlayRef!: ElementRef<SVGElement>;
  @ViewChild('iconPause') iconPauseRef!: ElementRef<SVGElement>;
  @ViewChild('progress') progressRef!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder) {
    this.attendanceForm = this.fb.group({
      attendance: ['', Validators.required],
      nombre: ['', Validators.required],
      mensaje: ['']
    });
  }

  ngAfterViewInit(): void {
    const audio = this.audioRef.nativeElement;
    const iconPlay = this.iconPlayRef.nativeElement;
    const iconPause = this.iconPauseRef.nativeElement;
    const progress = this.progressRef.nativeElement;

    // Play / Pause
    iconPlay.parentElement?.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
      } else {
        audio.pause();
        iconPlay.style.display = 'block';
        iconPause.style.display = 'none';
      }
    });

    // Actualizar barra de progreso
    audio.addEventListener('timeupdate', () => {
      if (audio.duration > 0) {
        progress.value = String((audio.currentTime / audio.duration) * 100);
      }
    });

    // Cambiar tiempo desde la barra
    progress.addEventListener('input', () => {
      const newTime = (Number(progress.value) / 100) * audio.duration;
      audio.currentTime = newTime;
    });
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

  openWhatsApp(): void {
    const phoneNumber = '5213317208312';
    const message = encodeURIComponent('¡Hola! Me gustaría confirmar mi invitación.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }
}
