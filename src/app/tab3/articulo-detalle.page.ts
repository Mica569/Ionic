import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-articulo-detalle',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  template: `
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>Detalle deportivo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button fill="clear" [routerLink]="['/tabs/deportes']">← Volver</ion-button>
      <h2>Artículo #{{ id }}</h2>
      <p>
        Detalles del artículo deportivo con id {{ id }}.
        Aquí podrías incluir crónica, estadísticas y multimedia.
      </p>
    </ion-content>
  `,
})
export class ArticuloDetallePage {
  id = this.route.snapshot.paramMap.get('id');
  constructor(private route: ActivatedRoute) {}
}

