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
  contenido?: string;
  categoria?: string;
};

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  categories = ['General', 'Tecnología', 'Finanzas', 'Salud', 'Deportes'];
  selectedCategory = 'General';
  
  allNoticias: NoticiaCard[] = [
    { 
      id: 1, 
      titulo: 'Nueva tecnología revoluciona el sector', 
      fecha: 'Hoy', 
      resumen: 'Un rápido vistazo a la innovación que está cambiando todo.', 
      imagenPortada: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800',
      contenido: 'Una nueva startup ha desarrollado un procesador cuántico a temperatura ambiente, un hito que podría acelerar la computación de alto rendimiento y la inteligencia artificial. Los expertos creen que esto podría resolver problemas complejos en medicina, finanzas y logística en una fracción del tiempo actual.',
      categoria: 'Tecnología'
    },
    { 
      id: 2, 
      titulo: 'Mercados a la alza', 
      fecha: 'Hoy', 
      resumen: 'Las principales bolsas cierran con ganancias impulsadas por tech.', 
      imagenPortada: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800',
      contenido: 'El índice NASDAQ alcanzó un nuevo récord histórico, impulsado por los sólidos informes de ganancias de las principales empresas tecnológicas. Los inversores se muestran optimistas sobre el futuro del sector, a pesar de las preocupaciones sobre la inflación y la política monetaria.',
      categoria: 'Finanzas'
    },
    { 
      id: 3, 
      titulo: 'Avances en salud', 
      fecha: 'Ayer', 
      resumen: 'Un tratamiento experimental muestra resultados prometedores.', 
      imagenPortada: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800',
      contenido: 'Investigadores de la Universidad de Stanford han publicado un estudio sobre una nueva terapia génica que ha demostrado ser eficaz en la reversión de enfermedades neurodegenerativas en ratones. Aunque todavía está en fase experimental, abre una nueva puerta de esperanza para millones de pacientes.',
      categoria: 'Salud'
    },
    { 
      id: 4, 
      titulo: 'El futuro del transporte', 
      fecha: 'Hace 2 días', 
      resumen: 'Vehiculos autónomos más cerca de lo que pensamos.', 
      imagenPortada: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800',
      contenido: 'Las pruebas piloto de taxis autónomos en grandes ciudades han mostrado una reducción del 90% en accidentes. Las regulaciones se están adaptando rápidamente para permitir su despliegue masivo en los próximos 5 años.',
      categoria: 'Tecnología'
    }
  ];

  noticias: NoticiaCard[] = [...this.allNoticias];

  cotizaciones = [
    { nombre: 'USD/PYG', valor: 7100, variacion: 0.85, actualizado: '10:15' },
    { nombre: 'EUR/PYG', valor: 8500, variacion: -0.32, actualizado: '10:10' },
    { nombre: 'BTC/USD', valor: 63250.0, variacion: 1.25, actualizado: '10:05' },
  ];

  constructor() {}

  handleRefresh(event: any) {
    setTimeout(() => {
      // Simular recarga de datos
      this.noticias = [...this.allNoticias];
      this.selectedCategory = 'General';
      event.target.complete();
    }, 2000);
  }

  filterNoticias(event: any) {
    const query = event.target.value.toLowerCase();
    this.noticias = this.allNoticias.filter(d => d.titulo.toLowerCase().indexOf(query) > -1 || d.resumen.toLowerCase().indexOf(query) > -1);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'General') {
      this.noticias = [...this.allNoticias];
    } else {
      this.noticias = this.allNoticias.filter(n => n.categoria === category); // Asumiendo que agregaremos categoría al modelo, por ahora filtra simullado o si agrego campo
    }
  }
}
