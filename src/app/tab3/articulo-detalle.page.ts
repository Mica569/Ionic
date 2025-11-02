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
          <p>No se encontró el artículo.</p>
        </ion-text>
      </ng-template>
    </ion-content>
  `,
})
export class ArticuloDetallePage {
  private articulos: Articulo[] = [
    {
      id: 201,
      titulo: 'Cerro Porteño vs. Olimpia: Empate en el Súperclásico',
      categoria: 'Fútbol',
      fecha: '19 Oct 2025',
      icono: 'football-outline',
      imagenPortada: 'assets/news/superclasico.jpg',
      imagenDetalle: 'assets/news/superclasico.jpg',
      resumen:
        'Partido de alto voltaje con cambios de dominio y chances claras para ambos equipos.',
      contenido:
        'El clásico se jugó con intensidad desde el inicio. Presión alta, duelos divididos y momentos de quiebre en las áreas. En el cierre, las variantes tácticas inclinaron el trámite y definieron un resultado clave para la tabla. Para el Ciclón de Jorge Bava, el empate en el superclásico resultó un golpe. Tras la victoria de Guaraní (que remontó para vencer 2-1 a Recoleta y estirar a 4 puntos su ventaja), el punto sumado en La Nueva Olla no le sirve mucho a Cerro Porteño, que ve cómo la distancia en la lucha por el título ahora es de tres puntos. El equipo azulgrana no pudo cortar su racha negativa ante el archirrival jugando en La Nueva Olla, que se extiende a 9 partidos (cuatro derrotas y cinco empates), ante un rival que jugó con inferioridad numérica desde la media hora. En la vereda de enfrente, el Decano de Éver Hugo Almeida consiguió un resultado valioso en un escenario adverso. Olimpia, jugando con diez, desde el minuto 33, cumplió su meta principal: asegurar un punto clave para seguir blindando su posición continental. Actualmente escala al quinto lugar con 53 puntos, desplazando a Nacional sacando un mínimo margen sobre sus perseguidores. Si bien Recoleta (51), 2 de Mayo (47) y Sportivo Ameliano (44) siguen acechando, el Decano sumó para consolidar su presencia en la próxima Copa Sudamericana.',

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
        'La edición 50 culminó con reconocimientos a los protagonistas históricos y a los ganadores del año.',
      contenido:
        'La ceremonia reunió a pilotos, navegantes y equipos en un ambiente de celebración. Se destacaron actuaciones sólidas en etapas exigentes, con navegación precisa y resistencia mecánica como factores decisivos para el podio final. En lo que sin lugar a dudas fue una emotiva noche de campeones, con el colorido acorde al cierre de una edición especial del Petrobras Transchaco Rally, la #50, tanto los ganadores de la competencia que se desarrolló en la región Occidental el pasado fin de semana, como los mejores del Campeonato Nacional de Rally (CNR), fueron galardonados este viernes en el Autódromo Víctor Rubén Dumot, de Capiatá.',
 
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
        'El piloto paraguayo suma un capítulo importante a su trayectoria al unirse a una estructura competitiva.',
      contenido:
        'El fichaje abre un panorama prometedor: desarrollo técnico, kilometraje en circuitos clave y adaptación a un monoplaza de alto rendimiento. El proyecto deportivo apunta a consolidar resultados y pelear por puntos de manera constante. Joshua Duerksen atraviesa la segunda temporada con el equipo alemán. En la primera, fue décimo con 87 puntos después de catorce carreras, ganando la sprint en Azerbaiyán y la principal en Emiratos Árabes Unidos. En la actual y a falta de dos fechas para finalizar la competencia, es duodécimo con 66, con un triunfo en Australia y otros podios en Spielberg, Monza y Bakú.',
    },
  ];

  id = Number(this.route.snapshot.paramMap.get('id'));
  art = this.articulos.find((a) => a.id === this.id);

  constructor(private route: ActivatedRoute) {}
}

