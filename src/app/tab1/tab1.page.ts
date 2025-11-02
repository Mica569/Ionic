import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type NoticiaCard = {
  id: number;
  titulo: string;
  fecha: string;
  resumen: string;
  imagenPortada?: string;
};

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  template: `
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>Noticias</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <ion-row>
          <ion-col size="12" sizeMd="6" sizeLg="4" *ngFor="let n of noticias">
            <ion-card class="articulo-card" [routerLink]="['/tabs/home/noticia', n.id]" routerDirection="forward">
              <ion-img [src]="n.imagenPortada || 'assets/placeholder.png'" alt="Noticia"></ion-img>
              <ion-card-header>
                <ion-card-title>{{ n.titulo }}</ion-card-title>
                <ion-card-subtitle>
                  <ion-note color="medium">{{ n.fecha }}</ion-note>
                </ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                <p>{{ n.resumen }}</p>
                <div class="card-actions">
                  <ion-button size="small" fill="clear" color="primary" [routerLink]="['/tabs/home/noticia', n.id]" (click)="$event.stopPropagation()">
                    Ver detalle
                    <ion-icon name="chevron-forward-outline" slot="end"></ion-icon>
                  </ion-button>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

      <h2 style="margin-top:16px">Cotizaciones</h2>
      <ion-list>
        <ion-item *ngFor="let c of cotizaciones">
          <ion-label>
            <h3>{{ c.nombre }}</h3>
            <p>Actualizado: {{ c.actualizado }}</p>
          </ion-label>
          <ion-badge [color]="c.variacion >= 0 ? 'success' : 'danger'" slot="end" mode="ios">
            {{ c.valor | number:'1.2-2' }} ({{ c.variacion | number:'1.2-2' }}%)
          </ion-badge>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  noticias: NoticiaCard[] = [
    { id: 1, titulo: 'Nueva tecnología revoluciona el sector', fecha: 'Hoy', resumen: 'Un rápido vistazo a la innovación que está cambiando todo.', imagenPortada: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800' },
    { id: 2, titulo: 'Mercados a la alza', fecha: 'Hoy', resumen: 'Las principales bolsas cierran con ganancias impulsadas por tech.', imagenPortada: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800' },
    { id: 3, titulo: 'Avances en salud', fecha: 'Ayer', resumen: 'Un tratamiento experimental muestra resultados prometedores.', imagenPortada: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800' },
  ];

  cotizaciones = [
    { nombre: 'USD/PYG', valor: 7100, variacion: 0.85, actualizado: '10:15' },
    { nombre: 'EUR/PYG', valor: 8500, variacion: -0.32, actualizado: '10:10' },
    { nombre: 'BTC/USD', valor: 63250.0, variacion: 1.25, actualizado: '10:05' },
  ];
}
