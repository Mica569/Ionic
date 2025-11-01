import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

type Articulo = {
  id: number;
  titulo: string;
  categoria: string;
  fecha: string;
  icono: string;
  imagen: string;
  resumen: string;
  contenido: string;
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
          <ion-img [src]="art.imagen" alt="{{ art.categoria }}"></ion-img>
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
            <p style="margin-top: 8px;">{{ art.contenido }}</p>
          </ion-card-content>
        </ion-card>
      </ng-container>

      <ng-template #notFound>
        <ion-text color="medium">
          <p>No se encontró el artículo.</p>
        </ion-text>
      </ng-template>
    </ion-content>
  `,
})
export class ArticuloDetallePage {
  private articulos: Articulo[] = [
    {
      id: 101,
      titulo: 'Gran victoria en el clásico',
      categoria: 'Fútbol',
      fecha: 'Hoy',
      icono: 'football-outline',
      imagen: 'assets/sports/football.svg',
      resumen:
        'El equipo local remontó en la segunda mitad y selló el triunfo con un gol decisivo en los minutos finales.',
      contenido:
        'En un partido intenso y cargado de emociones, la defensa ajustó líneas tras el descanso y el mediocampo tomó el control del juego. El gol de la victoria llegó tras una jugada colectiva que rompió la presión rival.',
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
      contenido:
        'El rendimiento fue sostenido desde la salida, con un ritmo explosivo en la curva final. La marca coloca al atleta entre los mejores del ranking regional y abre la puerta a competencias internacionales.',
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
      contenido:
        'La final se definió por pequeños detalles: alto porcentaje de primeros saques, pocos errores no forzados y control total de los puntos largos. La campeona dominó los momentos clave del partido.',
    },
  ];

  id = Number(this.route.snapshot.paramMap.get('id'));
  art = this.articulos.find((a) => a.id === this.id);

  constructor(private route: ActivatedRoute) {}
}

