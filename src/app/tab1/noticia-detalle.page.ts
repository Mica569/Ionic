import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

type Noticia = {
  id: number;
  titulo: string;
  fecha: string;
  resumen: string;
  imagenPortada?: string;
  contenido?: string;
};

@Component({
  selector: 'app-noticia-detalle',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  template: `
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/tabs/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Detalle de noticia</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ng-container *ngIf="noticia; else notFound">
        <ion-card>
          <ion-img [src]="noticia.imagenPortada || 'assets/placeholder.png'" alt="{{ noticia.titulo }}"></ion-img>          
          <ion-card-header>
            <ion-card-title>{{ noticia.titulo }}</ion-card-title>
            <ion-card-subtitle>
              <ion-note color="medium">{{ noticia.fecha }}</ion-note>
            </ion-card-subtitle>
          </ion-card-header>
          <ion-card-content class="ion-padding">
            <p style="white-space: pre-wrap;">{{ noticia.contenido }}</p>
          </ion-card-content>
        </ion-card>
      </ng-container>

      <ng-template #notFound>
        <ion-text color="medium">
          <p>No se encontró la noticia.</p>
        </ion-text>
      </ng-template>
    </ion-content>
  `,
})
export class NoticiaDetallePage {
  private noticias: Noticia[] = [
    { 
      id: 1, 
      titulo: 'Nueva tecnología revoluciona el sector', 
      fecha: 'Hoy', 
      resumen: 'Un rápido vistazo a la innovación que está cambiando todo.', 
      imagenPortada: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800',
      contenido: 'Una nueva startup ha desarrollado un procesador cuántico a temperatura ambiente, un hito que podría acelerar la computación de alto rendimiento y la inteligencia artificial. Los expertos creen que esto podría resolver problemas complejos en medicina, finanzas y logística en una fracción del tiempo actual.'
    },
    { 
      id: 2, 
      titulo: 'Mercados a la alza', 
      fecha: 'Hoy', 
      resumen: 'Las principales bolsas cierran con ganancias impulsadas por tech.', 
      imagenPortada: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800',
      contenido: 'El índice NASDAQ alcanzó un nuevo récord histórico, impulsado por los sólidos informes de ganancias de las principales empresas tecnológicas. Los inversores se muestran optimistas sobre el futuro del sector, a pesar de las preocupaciones sobre la inflación y la política monetaria.'
    },
    { 
      id: 3, 
      titulo: 'Avances en salud', 
      fecha: 'Ayer', 
      resumen: 'Un tratamiento experimental muestra resultados prometedores.', 
      imagenPortada: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800',
      contenido: 'Investigadores de la Universidad de Stanford han publicado un estudio sobre una nueva terapia génica que ha demostrado ser eficaz en la reversión de enfermedades neurodegenerativas en ratones. Aunque todavía está en fase experimental, abre una nueva puerta de esperanza para millones de pacientes.'
    },
  ];

  id: number;
  noticia: Noticia | undefined;

  constructor(private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.noticia = this.noticias.find((n) => n.id === this.id);
  }
}
