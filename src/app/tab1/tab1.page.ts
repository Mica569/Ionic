import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Noticias</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h2>Destacadas</h2>
      <ion-card *ngFor="let n of noticias">
        <ion-card-header>
          <ion-card-title>{{ n.titulo }}</ion-card-title>
          <ion-card-subtitle>{{ n.fecha }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>{{ n.resumen }}</p>
          <ion-button size="small" [routerLink]="['/tabs/home/noticia', n.id]">Ver detalle</ion-button>
        </ion-card-content>
      </ion-card>

      <h2 style="margin-top:16px">Cotizaciones</h2>
      <ion-list>
        <ion-item *ngFor="let c of cotizaciones">
          <ion-label>
            <h3>{{ c.nombre }}</h3>
            <p>Actualizado: {{ c.actualizado }}</p>
          </ion-label>
          <ion-badge [color]="c.variacion >= 0 ? 'success' : 'danger'" slot="end">
            {{ c.valor | number:'1.2-2' }} ({{ c.variacion | number:'1.2-2' }}%)
          </ion-badge>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
})
export class Tab1Page {
  noticias = [
    { id: 1, titulo: 'Nueva tecnología revoluciona el sector', fecha: 'Hoy', resumen: 'Un rápido vistazo a la innovación que está cambiando todo.' },
    { id: 2, titulo: 'Mercados a la alza', fecha: 'Hoy', resumen: 'Las principales bolsas cierran con ganancias impulsadas por tech.' },
    { id: 3, titulo: 'Avances en salud', fecha: 'Ayer', resumen: 'Un tratamiento experimental muestra resultados prometedores.' },
  ];

  cotizaciones = [
    { nombre: 'USD/PYG', valor: 7100, variacion: 0.85, actualizado: '10:15' },
    { nombre: 'EUR/PYG', valor: 8500, variacion: -0.32, actualizado: '10:10' },
    { nombre: 'BTC/USD', valor: 63250.0, variacion: 1.25, actualizado: '10:05' },
  ];
}
