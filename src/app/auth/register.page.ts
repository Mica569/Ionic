import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/tabs/cuenta"></ion-back-button>
        </ion-buttons>
        <ion-title>Crear cuenta</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <form (ngSubmit)="onSubmit()" autocomplete="off">
        <ion-list>
          <ion-item>
            <ion-input label="Usuario" labelPlacement="floating" [(ngModel)]="username" name="username" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label="Contraseña" labelPlacement="floating" [(ngModel)]="password" name="password" [type]="show ? 'text' : 'password'" required></ion-input>
            <ion-button fill="clear" slot="end" (click)="show=!show" type="button">
              <ion-icon [name]="show ? 'eye-off-outline' : 'eye-outline'"></ion-icon>
            </ion-button>
          </ion-item>
          <ion-item>
            <ion-input label="Repetir contraseña" labelPlacement="floating" [(ngModel)]="confirm" name="confirm" [type]="show ? 'text' : 'password'" required></ion-input>
          </ion-item>
        </ion-list>

        <ion-text color="danger" *ngIf="error" style="display:block; margin-top:8px;">{{ error }}</ion-text>
        <ion-button expand="block" type="submit" [disabled]="loading" style="margin-top:12px;">
          {{ loading ? 'Creando...' : 'Crear cuenta' }}
        </ion-button>
        <ion-button expand="block" fill="clear" [routerLink]="['/tabs/cuenta/login']">Ya tengo cuenta</ion-button>
      </form>
    </ion-content>
  `,
})
export class RegisterPage {
  username = '';
  password = '';
  confirm = '';
  show = false;
  error = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  async onSubmit() {
    this.error = '';
    if (this.password !== this.confirm) {
      this.error = 'Las contraseñas no coinciden';
      return;
    }
    this.loading = true;
    const res = await this.auth.register(this.username, this.password);
    this.loading = false;
    if (res.ok) {
      this.router.navigateByUrl('/tabs/cuenta', { replaceUrl: true });
    } else {
      this.error = res.error;
    }
  }
}

