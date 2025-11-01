import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
type Articulo = {
  id: number;
  titulo: string;
  categoria: 'Fútbol' | 'Motor';
  fecha: string;
  icono: string;
  imagen?: string;
  imagenPortada?: string;
  imagenDetalle?: string;
  resumen: string;
  contenido: string;
  fuenteUrl?: string;
};

@Component({
  selector: 'app-articulo-detalle',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  template: `
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/tabs/deportes"></ion-back-button>
        </ion-buttons>
        <ion-title>Detalle deportivo</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ng-container *ngIf="art; else notFound">
        <ion-card>
          <ion-img [src]="art.imagenDetalle || art.imagenPortada || art.imagen" alt="{{ art.categoria }}"></ion-img>
          <ion-card-header>
            <ion-card-title>{{ art.titulo }}</ion-card-title>
            <ion-card-subtitle>
              <ion-chip color="tertiary" outline>
                <ion-icon [name]="art.icono"></ion-icon>
                <ion-label>{{ art.categoria }}</ion-label>
              </ion-chip>
              <ion-note color="medium">{{ art.fecha }}</ion-note>
            </ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <p>{{ art.resumen }}</p>
            <p style="margin-top: 8px; white-space: pre-line;">{{ art.contenido }}</p>

          </ion-card-content>
        </ion-card>
      </ng-container>

      <ng-template #notFound>
        <ion-text color="medium">
          <p>No se encontrÃ³ el artÃ­culo.</p>
        </ion-text>
      </ng-template>
    </ion-content>
  `,
})
export class ArticuloDetallePage {
  private articulos: Articulo[] = [
    {
      id: 201,
      titulo: 'Cerro PorteÃ±o vs. Olimpia: SÃºperclÃ¡sico decisivo',
      categoria: 'FÃºtbol',
      fecha: '19 Oct 2025',
      icono: 'football-outline',
      imagenPortada: 'assets/news/superclasico.jpg',
      imagenDetalle: 'assets/news/superclasico.jpg',
      resumen:
        'Partido de alto voltaje con cambios de dominio y chances claras para ambos equipos.',
      contenido:
        'El clÃ¡sico se jugÃ³ con intensidad desde el inicio. PresiÃ³n alta, duelos divididos y momentos de quiebre en las Ã¡reas. En el cierre, las variantes tÃ¡cticas inclinaron el trÃ¡mite y definieron un resultado clave para la tabla.',
 
    },
    {
      id: 202,
      titulo: 'Transchaco Rally: noche de campeones',
      categoria: 'Motor',
      fecha: '31 Oct 2025',
      icono: 'car-sport-outline',
      imagenPortada: 'assets/news/transchaco.jpg',
      imagenDetalle: 'assets/news/transchaco.jpg',
      resumen:
        'La ediciÃ³n 50 culminÃ³ con reconocimientos a los protagonistas histÃ³ricos y a los ganadores del aÃ±o.',
      contenido:
        'La ceremonia reuniÃ³ a pilotos, navegantes y equipos en un ambiente de celebraciÃ³n. Se destacaron actuaciones sÃ³lidas en etapas exigentes, con navegaciÃ³n precisa y resistencia mecÃ¡nica como factores decisivos para el podio final.',
    },
    {
      id: 203,
      titulo: 'Joshua Duerksen a Invicta Racing (F2)',
      categoria: 'Motor',
      fecha: '22 Oct 2025',
      icono: 'flag-outline',
      imagenPortada: 'assets/news/duerksen.jpg',
      imagenDetalle: 'assets/news/duerksen.jpg',
      resumen:
        'El piloto paraguayo suma un capÃ­tulo importante a su trayectoria al unirse a una estructura competitiva.',
      contenido:
        'El fichaje abre un panorama prometedor: desarrollo tÃ©cnico, kilometraje en circuitos clave y adaptaciÃ³n a un monoplaza de alto rendimiento. El proyecto deportivo apunta a consolidar resultados y pelear por puntos de manera constante.',
    },
  ];

  id = Number(this.route.snapshot.paramMap.get('id'));
  art = this.articulos.find((a) => a.id === this.id);

  constructor(private route: ActivatedRoute) {}
}






