import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

type ArticuloCard = {
  id: number;
  titulo: string;
  categoria: 'Futbol' | 'Motor';
  fecha: string;
  icono: string;
  imagen?: string;
  imagenPortada?: string;
  resumen: string;
  fuenteUrl?: string;
};

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  filtro = 'Todos';
  
  // Datos para el ticker de partidos en vivo
  liveMatches = [
    { home: 'Olimpia', away: 'Cerro', score: '1 - 1', time: '75\'' },
    { home: 'Libertad', away: 'Guaraní', score: '2 - 0', time: 'FT' },
    { home: 'Luqueño', away: 'Nacional', score: '0 - 0', time: '32\'' },
    { home: 'Tacuary', away: 'Ameliano', score: '1 - 2', time: '88\'' },
  ];

  articulos: ArticuloCard[] = [
    {
      id: 201,
      titulo: 'Cerro Porteño vs Olimpia: Empate en el Súperclásico',
      categoria: 'Futbol',
      fecha: '19 Oct 2025',
      icono: 'football-outline',
      imagenPortada: 'assets/news/superclasico.jpg',
      resumen:
        'Un clásico intenso con tramos de alta presión y opciones claras. El resultado define posiciones en la recta final del torneo.',

    },
    {
      id: 202,
      titulo: 'Transchaco Rally: noche de campeones',
      categoria: 'Motor',
      fecha: '31 Oct 2025',
      icono: 'car-sport-outline',
      imagenPortada: 'assets/news/transchaco.jpg',
      resumen:
        'La edición 50 del Transchaco celebró a sus ganadores con emoción y homenajes a figuras históricas del rally nacional.',
 
    },
    {
      id: 203,
      titulo: 'Joshua Duerksen a Invicta Racing (F2)',
      categoria: 'Motor',
      fecha: '22 Oct 2025',
      icono: 'flag-outline',
      imagenPortada: 'assets/news/duerksen.jpg',
      resumen:
        'El piloto paraguayo da el salto a una escudería con proyección, abriendo nuevas expectativas de cara a la próxima temporada.',
   
    },
    {
      id: 204,
      titulo: 'TCR50: Gustavo Saba Rodríguez, un largo camino recorrido',
      categoria: 'Motor',
      fecha: '27 Oct 2025',
      icono: 'car-sport-outline',
      imagenPortada: 'assets/news/piloto.jpg',
      resumen:
        'El múltiple campeón nacional repasó su trayectoria y el significado del TCR50, una cita histórica para el automovilismo local.',
    },
    {
      id: 205,
      titulo: 'El campeón de la Sudamericana ganará 6,5 millones de dólares',
      categoria: 'Futbol',
      fecha: '28 Oct 2025',
      icono: 'football-outline',
      imagenPortada: 'assets/news/sudamericana.jpg',
      resumen:
        'La Conmebol definió los premios: el título de la Copa Sudamericana tendrá un incentivo económico récord para el campeón.',

    },
    {
      id: 206,
      titulo: 'Confirmado: el Defensores albergará la final de la Sudamericana',
      categoria: 'Futbol',
      fecha: '30 Oct 2025',
      icono: 'football-outline',
      imagenPortada: 'assets/news/defensores.jpg',
      resumen:
        'El histórico estadio Defensores del Chaco será sede de la próxima final de la Copa Sudamericana, con trabajos de puesta a punto.',
    },
  ];

  get articulosFiltrados() {
    if (this.filtro === 'Todos') return this.articulos;
    return this.articulos.filter((a) => a.categoria === this.filtro);
  }
}

