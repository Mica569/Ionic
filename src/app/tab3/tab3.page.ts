import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  template: `
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>Deportes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-segment [(ngModel)]="filtro" value="Todos" class="segment-categorias">
        <ion-segment-button value="Todos">
          <ion-label>Todos</ion-label>
        </ion-segment-button>
        <ion-segment-button value="FÃºtbol">
          <ion-label>FÃºtbol</ion-label>
        </ion-segment-button>
        <ion-segment-button value="Motor">
          <ion-label>Motor</ion-label>
        </ion-segment-button>
      </ion-segment>

      <ion-grid fixed>
        <ion-row>
          <ion-col size="12" sizeMd="6" sizeLg="4" *ngFor="let a of articulosFiltrados">
            <ion-card class="articulo-card" [routerLink]="['/tabs/deportes/articulo', a.id]" routerDirection="forward">
              <ion-img [src]="a.imagen" alt="{{ a.categoria }}"></ion-img>
              <ion-card-header>
                <ion-card-title>{{ a.titulo }}</ion-card-title>
                <ion-card-subtitle>
                  <ion-chip color="tertiary" outline>
                    <ion-icon [name]="a.icono"></ion-icon>
                    <ion-label>{{ a.categoria }}</ion-label>
                  </ion-chip>
                  <ion-note color="medium">{{ a.fecha }}</ion-note>
                </ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                <p>{{ a.resumen }}</p>
                <div class="card-actions">
                  <ion-button size="small" fill="clear" color="primary" [routerLink]="['/tabs/deportes/articulo', a.id]" (click)="$event.stopPropagation()">
                    Ver detalle
                    <ion-icon name="chevron-forward-outline" slot="end"></ion-icon>
                  </ion-button>
                  <ion-button *ngIf="a.fuenteUrl" size="small" fill="clear" color="medium" [href]="a.fuenteUrl" target="_blank" rel="noopener noreferrer" (click)="$event.stopPropagation()">
                    Fuente
                    <ion-icon name="link-outline" slot="end"></ion-icon>
                  </ion-button>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  `,
})
export class Tab3Page {
  filtro = 'Todos';
  articulos = [
    {
      id: 201,
      titulo: 'Cerro PorteÃ±o vs. Olimpia: SÃºperclÃ¡sico decisivo',
      categoria: 'FÃºtbol',
      fecha: '19 Oct 2025',
      icono: 'football-outline',
      imagen: 'assets/sports/football.svg',
      resumen:
        'Un clÃ¡sico intenso con tramos de alta presiÃ³n y opciones claras. El resultado define posiciones en la recta final del torneo.',
      fuenteUrl:
        'https://www.abc.com.py/deportes/futbol/superclasico/2025/10/19/cerro-porteno-vs-olimpia-ultimo-superclasico-del-ano-en-vivo/',
    },
    {
      id: 202,
      titulo: 'Transchaco Rally: noche de campeones',
      categoria: 'Motor',
      fecha: '31 Oct 2025',
      icono: 'car-sport-outline',
      imagen: 'assets/sports/rally.svg',
      resumen:
        'La ediciÃ³n 50 del Transchaco celebrÃ³ a sus ganadores con emociÃ³n y homenajes a figuras histÃ³ricas del rally nacional.',
      fuenteUrl:
        'https://www.abc.com.py/deportes/motor/2025/10/31/50-transchaco-rally-emotiva-noche-de-campeones/',
    },
    {
      id: 203,
      titulo: 'Joshua Duerksen a Invicta Racing (F2)',
      categoria: 'Motor',
      fecha: '22 Oct 2025',
      icono: 'flag-outline',
      imagen: 'assets/sports/f2.svg',
      resumen:
        'El piloto paraguayo da el salto a una escuderÃ­a con proyecciÃ³n, abriendo nuevas expectativas de cara a la prÃ³xima temporada.',
      fuenteUrl:
        'https://www.abc.com.py/deportes/motor/2025/10/22/joshua-duerksen-es-nuevo-piloto-de-invicta-racing-campeon-de-la-formula-2/',
    },
  ];

  get articulosFiltrados() {
    if (this.filtro === 'Todos') return this.articulos;
    return this.articulos.filter((a) => a.categoria === this.filtro);
  }
}


