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
      <ion-list inset>
        <ion-item
          *ngFor="let a of articulos"
          detail="true"
          [routerLink]="['/tabs/deportes/articulo', a.id]"
        >
          <ion-thumbnail slot="start">
            <img [src]="a.imagen" alt="{{ a.categoria }}" />
          </ion-thumbnail>
          <ion-label>
            <h3>{{ a.titulo }}</h3>
            <p>{{ a.resumen }}</p>
            <div class="meta">
              <ion-chip color="tertiary" outline>
                <ion-icon [name]="a.icono"></ion-icon>
                <ion-label>{{ a.categoria }}</ion-label>
              </ion-chip>
              <ion-note color="medium">{{ a.fecha }}</ion-note>
            </div>
          </ion-label>
          <ion-icon name="chevron-forward-outline" slot="end"></ion-icon>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
})
export class Tab3Page {
  articulos = [
    {
      id: 101,
      titulo: 'Gran victoria en el clásico',
      categoria: 'Fútbol',
      fecha: 'Hoy',
      icono: 'football-outline',
      imagen: 'assets/sports/football.svg',
      resumen:
        'El equipo local remontó en la segunda mitad y selló el triunfo con un gol decisivo en los minutos finales.',
    },
    {
      id: 102,
      titulo: 'Récord nacional en la pista',
      categoria: 'Atletismo',
      fecha: 'Ayer',
      icono: 'barbell-outline',
      imagen: 'assets/sports/athletics.svg',
      resumen:
        'La promesa del atletismo impuso un nuevo tiempo histórico en los 400m, superando la marca anterior por dos décimas.',
    },
    {
      id: 103,
      titulo: 'Triunfo en la final de tenis',
      categoria: 'Tenis',
      fecha: 'Ayer',
      icono: 'tennisball-outline',
      imagen: 'assets/sports/tennis.svg',
      resumen:
        'Con un servicio impecable y gran consistencia desde el fondo, la tenista se coronó campeona en sets corridos.',
    },
  ];
}

