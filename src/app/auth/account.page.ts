import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Cuenta👤</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ng-container *ngIf="(auth.currentUser$ | async) as user; else guest">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Hola, {{ user.username }}</ion-card-title>
            <ion-card-subtitle>Registrado el {{ user.createdAt | date:'medium' }}</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <p>Tu sesión está activa en este dispositivo.</p>
            <ion-button color="medium" (click)="logout()">Cerrar sesión</ion-button>
          </ion-card-content>
        </ion-card>
      </ng-container>

      <ng-template #guest>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Bienvenid@</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>Si deseas, crea una cuenta para guardar tu sesión local.</p>
            <div style="display:flex; gap:8px;">
              <ion-button [routerLink]="['/tabs/cuenta/login']">Iniciar sesión</ion-button>
              <ion-button fill="outline" [routerLink]="['/tabs/cuenta/registrar']">Crear cuenta</ion-button>
            </div>
          </ion-card-content>
        </ion-card>
      </ng-template>
    </ion-content>
  `,
})
export class AccountPage {
  constructor(public auth: AuthService) {}
  logout() { this.auth.logout(); }
}

