import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-noticia-detalle',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Detalle de noticia</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button fill="clear" [routerLink]="['/tabs/home']">← Volver</ion-button>
      <h2>Noticia #{{ id }}</h2>
      <p>
        Este es el detalle de la noticia {{ id }}.
        
      </p>
    </ion-content>
  `,
})
export class NoticiaDetallePage {
  id = this.route.snapshot.paramMap.get('id');
  constructor(private route: ActivatedRoute) {}
}

