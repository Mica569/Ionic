import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

type Articulo = {
  id: number;
  titulo: string;
  categoria: 'Futbol' | 'Motor';
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
  styleUrls: ['./articulo-detalle.page.scss'],
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
        <ion-card class="detalle-articulo-card">
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
            <p class="resumen">{{ art.resumen }}</p>
            <p class="contenido">{{ art.contenido }}</p>

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
      categoria: 'Futbol',
      fecha: '19 Oct 2025',
      icono: 'football-outline',
      imagenPortada: 'assets/news/superclasico.jpg',
      imagenDetalle: 'assets/news/superclasico.jpg',
      resumen:
        'Partido de alto voltaje con cambios de dominio y chances claras para ambos equipos.',
      contenido: `El clásico se jugó con intensidad desde el inicio, con presión alta y duelos divididos.

El punto dejó sensaciones contrapuestas: el Ciclón no pudo recortar distancia, mientras que el Decano, con uno menos desde los 33 minutos, aseguró un resultado clave.

El duelo, correspondiente a la decimoséptima fecha del torneo Clausura, se disputó en el imponente estadio La Nueva Olla. El volante Hugo Quintana había inaugurado el marcador para la visita; sin embargo, sobre el final, el Ciclón encontró la igualdad gracias a Ignacio Aliseda, quien puso el definitivo 1-1 en el marcador.
`,
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
        'La edición 50 culminó con reconocimientos a protagonistas históricos y a los campeones del año.',
      contenido: `Una noche cargada de emociones que homenajeó a pilotos y equipos.

En lo que sin lugar a dudas fue una emotiva noche de campeones, con el colorido acorde al cierre de una edición especial del Petrobras Transchaco Rally, la #50, tanto los ganadores de la competencia que se desarrolló en la región Occidental el pasado fin de semana, como los mejores del Campeonato Nacional de Rally (CNR), fueron galardonados este viernes en el Autódromo Víctor Rubén Dumot, de Capiatá.

Así mismo, aquellos que “cumplieron el sueño de dar la vuelta al Chaco”, que una vez más este año expuso su rigor a quienes lo desafiaron durante las tres etapas, recibieron la placa “Choferes del Chaco”.

Gustavo Saba y José Luis Díaz (Saba Competición) fueron los vencedores de la clasificación general y la clase RC2A del TCR50; y acompañados de los familiares, amigos e integrantes del equipo, celebraron el merecido logro que llegó luego de haberlo buscado e insistido durante un tiempo bastante prolongado con mucha perseverancia.`,
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
        'El piloto paraguayo suma un capítulo importante a su trayectoria al unirse a una importante estructura competitiva.',
      contenido: `El proyecto deportivo apunta a consolidar resultados con más desarrollo técnico y rodaje.

Joshua Duerksen fichó por Invicta Racing. El paraguayo de 21 años correrá en 2026 con la vigente campeona de la Fórmula 2. “Estamos encantados de anunciar el fichaje de Joshua Dürksen para la temporada 2026 de la Formula 2”, anunció el equipo británico, que en 2024 logró el título con el brasileño Gabriel Bortoleto, piloto de Kick Sauber en la Fórmula 1.

“Estoy increíblemente orgulloso de representar a Invicta Racing y Paraguay en la temporada dos mil veintiséis de Fórmula dos”, expresó Duerksen en una entrevista a la F2. “El equipo ha demostrado durante varios años que es uno de los mejores del campeonato, y estoy entusiasmado por aprovechar esta gran oportunidad”, añadió el actual uno de AIX Racing.`,
    },
    {
      id: 204,
      titulo: 'TCR50: Gustavo Saba Rodríguez, un largo camino recorrido',
      categoria: 'Motor',
      fecha: '27 Oct 2025',
      icono: 'car-sport-outline',
      imagenPortada: 'assets/news/piloto.jpg',
      imagenDetalle: 'assets/news/piloto.jpg',
      resumen:
        'El referente del rally paraguayo repasó hitos y aprendizajes en la previa del TCR50.',
      contenido: `Saba compartió cómo construyó una campaña sólida: trabajo en equipo, constancia y evolución técnica.
El TCR50 simboliza un homenaje a la historia del deporte motor paraguayo y un impulso a nuevas generaciones.
Desde la edición de 1999 del Rally del Chaco, en la que Gustavo Saba Rodríguez debutó en la máxima prueba del deporte motor de nuestro país.

Tuvieron que pasar 26 años, 5 marcas de autos, varios abandonos y podios para que en el TCR50 tenga el privilegio de ser uno de los ganadores de la tradicional prueba chaqueña.
El experimentado piloto de 46 años, Gustavo Saba Rodríguez, navegado por el copiloto argentino José Luis “El Pepe” Díaz, a bordo del Toyota GR Yaris Rally2, del Saba Competición, finalmente fue el vencedor de la edición #50 del Petrobras Transchaco Rally.

Tras lo que fue una extraordinaria definición en el último tramo de la competencia (Picada Histórica a Ruta Transchaco, de 12,7 kilómetros), la dupla Saba y Díaz logró recortar la diferencia que tenía en contra con relación a Fau Zaldívar y Marcelo der Ohannesian, quienes tuvieron un doble llantazo y problemas mecánicos en el Hyundai i20 N Rally2 (MZ Racing) en la parte final de la carrera, que le privaron de la victoria en esta ocasión y finalizaron en el segundo lugar.`,

    },
    {
      id: 205,
      titulo: 'El campeón de la Sudamericana ganará 6,5 millones de dólares',
      categoria: 'Futbol',
      fecha: '28 Oct 2025',
      icono: 'football-outline',
      imagenPortada: 'assets/news/sudamericana.jpg',
      imagenDetalle: 'assets/news/sudamericana.jpg',
      resumen:
        'Conmebol oficializó el premio para el campeón de la Copa Sudamericana.',
      contenido: `El ganador embolsará 6,5 millones de dólares, además de los ingresos acumulados por fase.
Una decisión que busca jerarquizar el torneo y sostener su crecimiento.

El premio al campeón de este año será medio millón de dólares más que el entregado en 2024, mientras que para el subcampeón se mantiene la misma cifra.

“Este incremento refleja el compromiso de la Conmebol con el fortalecimiento del fútbol sudamericano”, indicó la Confederación Sudamericana de Fútbol (Conmebol), que tiene su sede en la ciudad paraguaya de Luque, en la red social X.

A las semifinales del campeonato se clasificaron Universidad de Chile, Independiente del Valle, Atlético Mineiro y Lanús.

Esos dos clubes llegaron a la Sudamericana desde la fase de grupos de la Copa Libertadores de América.

Atlético Mineiro se embolsó hasta ahora 3.730.000 dólares y el Lanús argentino sumó un ingreso de 3.345.000 dólares.

Los cuatros equipos disputan esta semana los partidos de ida del torneo y la subsiguiente, los duelos de vuelta.`,

    },
    {
      id: 206,
      titulo: 'Confirmado: el Defensores albergará la final de la Sudamericana',
      categoria: 'Futbol',
      fecha: '30 Oct 2025',
      icono: 'football-outline',
      imagenPortada: 'assets/news/defensores.jpg',
      imagenDetalle: 'assets/news/defensores.jpg',
      resumen:
        'El Defensores del Chaco será sede de la final, con mejoras en marcha.',
      contenido: `El ueno Defensores del Chaco albergará la final de la Copa Sudamericana 2025 que la jugarán Lanús y Atlético Mineiro, el próximo 22 de noviembre. La Confederación Sudamericana de Fútbol confirmó la sede este viernes. Se prevén trabajos en iluminación, vestuarios y áreas de prensa para cumplir con estándares de final única.

Esta será la primera final de este certamen que se vivirá en el mítico estadio de Asunción a partir de las 17:00 de esa jornada. El ueno Defensores del Chaco, un escenario histórico del fútbol sudamericano, ya acogió finales de Copa Libertadores y de Copa América.

Además, será la tercera ocasión que la ciudad recibirá un evento de esta magnitud ya que anteriormente el ueno La Nueva Olla fue escenario en 2019, cuando se midieron Independiente del Valle y Colón, y en 2024, con el Racing vs. Cruzeiro.`,

    },
  ];

  id = Number(this.route.snapshot.paramMap.get('id'));
  art = this.articulos.find((a) => a.id === this.id);

  constructor(private route: ActivatedRoute) {}
}
