import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  template: `
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title>Clima</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item *ngFor="let c of ciudades" [routerLink]="['/tabs/clima/ciudad', c.nombre]">
          <ion-label>
            <h3>{{ c.nombre }}</h3>
            <p>{{ c.descripcion }}</p>
          </ion-label>
          <ion-badge slot="end" color="tertiary">{{ c.temp }}°C</ion-badge>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
})
export class Tab2Page {
  ciudades = [
    { nombre: 'Asunción', temp: 22, descripcion: 'Parcialmente nublado' },
    { nombre: 'CDE', temp: 19, descripcion: 'Soleado' },
    { nombre: 'Boquerón', temp: 28, descripcion: 'Vientos moderados' },
  ];
}

