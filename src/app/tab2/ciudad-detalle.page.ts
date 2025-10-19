import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ciudad-detalle',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  template: `
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title>Clima en {{ nombre }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button fill="clear" [routerLink]="['/tabs/clima']">← Volver</ion-button>
      <p>Pronóstico extendido para {{ nombre }}:</p>
      <ion-list>
        <ion-item *ngFor="let d of pronostico">
          <ion-label>{{ d.dia }} - {{ d.condicion }}</ion-label>
          <ion-badge slot="end">{{ d.min }}° / {{ d.max }}°</ion-badge>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
})
export class CiudadDetallePage {
  nombre = this.route.snapshot.paramMap.get('nombre');
  pronostico = [
    { dia: 'Hoy', min: 17, max: 24, condicion: 'Parcialmente nublado' },
    { dia: 'Mañana', min: 16, max: 22, condicion: 'Lluvias aisladas' },
    { dia: 'Sábado', min: 15, max: 28, condicion: 'Soleado' },
  ];
  constructor(private route: ActivatedRoute) {}
}

