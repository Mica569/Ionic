import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  template: `
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>Deportes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item *ngFor="let a of articulos" [routerLink]="['/tabs/deportes/articulo', a.id]">
          <ion-label>
            <h3>{{ a.titulo }}</h3>
            <p>{{ a.categoria }} · {{ a.fecha }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
})
export class Tab3Page {
  articulos = [
    { id: 101, titulo: 'Gran victoria en el clásico', categoria: 'Fútbol', fecha: 'Hoy' },
    { id: 102, titulo: 'Récord en la pista', categoria: 'Atletismo', fecha: 'Ayer' },
    { id: 103, titulo: 'Triunfo en final de tenis', categoria: 'Tenis', fecha: 'Ayer' },
  ];
}

