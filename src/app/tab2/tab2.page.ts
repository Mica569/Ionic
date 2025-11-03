import { Component, AfterViewInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ]
})
export class Tab2Page implements AfterViewInit {
  
  // Array de ciudades para la lista
  ciudades = [
    { nombre: 'Asunción', temp: 22, descripcion: 'Parcialmente nublado' },
    { nombre: 'CDE', temp: 19, descripcion: 'Soleado' },
    { nombre: 'Boquerón', temp: 28, descripcion: 'Vientos moderados' },
    { nombre: 'J. Augusto Saldívar', temp: 26, descripcion: 'Despejada' },
    { nombre: 'Capiata', temp: 24, descripcion: 'Mayormente nublado' },
    { nombre: 'San Antonio', temp: 30, descripcion: 'Soleado' },
    { nombre: 'Fernando de la Mora', temp: 26, descripcion: 'Parcialmente nublado' },
    { nombre: 'San Lorenzo', temp: 30, descripcion: 'Soleado' },
    { nombre: 'Encarnación', temp: 26, descripcion: 'Parcialmente despejado' },
    { nombre: 'Lambare', temp: 27, descripcion: 'Soleado' },
  ];

  // Datos para el mapa
  private map: any;
  private datosTemperatura = [
    { departamento: 'Asunción', temperatura: 28, lat: -25.3005, lng: -57.6362, descripcion: 'Soleado' },
    { departamento: 'Central', temperatura: 27, lat: -25.3949, lng: -57.5357, descripcion: 'Parcialmente nublado' },
    { departamento: 'Alto Paraná', temperatura: 25, lat: -25.5167, lng: -54.6167, descripcion: 'Lluvias moderadas' },
    { departamento: 'Itapúa', temperatura: 26, lat: -27.3333, lng: -55.8333, descripcion: 'Nublado' },
    { departamento: 'Paraguarí', temperatura: 24, lat: -25.6333, lng: -57.1500, descripcion: 'Fresco' },
    { departamento: 'Alto Paraguay', temperatura: 32, lat: -20.5000, lng: -59.0000, descripcion: 'Muy caluroso' },
    { departamento: 'Concepción', temperatura: 29, lat: -23.4064, lng: -57.4344, descripcion: 'Caluroso' },
    { departamento: 'Lambare', temperatura: 27, lat: -25.346394, lng: -57.624402, descripcion: 'Soleado' },
    { departamento: 'San Lorenzo', temperatura: 30, lat: -25.342703, lng: -57.510501, descripcion: 'Soleado' },
    { departamento: 'Encarnación', temperatura: 26, lat: -27.339793, lng: -55.863945, descripcion: 'Parcialmente despejado' }
  ];

  async ngAfterViewInit() {
    // Cargar Leaflet dinámicamente
    await this.cargarLeaflet(); 
    this.inicializarMapa();
  }

  private async cargarLeaflet() {
    // Cargar Leaflet solo cuando sea necesario
    const leaflet = await import('leaflet');
    (window as any).L = leaflet.default;
  }

  private inicializarMapa() {
    try {
      const L = (window as any).L;
      
      if (!L) {
        console.error('Leaflet no se cargó');
        this.mostrarMapaFallback();
        return;
      }

      // Crear el mapa
      this.map = L.map('mapaClima').setView([-23.4425, -58.4438], 6);

      // Debug de clicks
      this.map.on('click', (e: any) => {
        console.log('Click en mapa en:', e.latlng);
      });

      // Añadir capa de OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(this.map);

      // Añadir marcadores
      this.añadirMarcadores(L);

      console.log('Mapa Leaflet inicializado correctamente');

    } catch (error) {
      console.error('Error al crear el mapa:', error);
      this.mostrarMapaFallback();
    }
  }

  private añadirMarcadores(L: any) {
    // Configurar íconos de marcadores
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });

    this.datosTemperatura.forEach(zona => {
      const color = this.getColorTemperatura(zona.temperatura);
      
      const popupContent = `
        <div style="text-align: center; padding: 10px; min-width: 120px;">
          <strong style="color: #5a636fff; font-size: 14px;">${zona.departamento}</strong>
          <div style="font-size: 20px; font-weight: bold; color: ${color}; margin: 8px 0;">
            ${zona.temperatura}°C
          </div>
          <small style="color: #666;">${zona.descripcion}</small>
        </div>
      `;

      // Crear marcador
      const marcador = L.marker([zona.lat, zona.lng]);

      marcador.addTo(this.map)
        .bindPopup(popupContent)
        .bindTooltip(`${zona.departamento}: ${zona.temperatura}°C`, {
          permanent: false,
          direction: 'top'
        });

      console.log(`Marcador añadido: ${zona.departamento}`);
    });
  }

  private mostrarMapaFallback() {
    const mapaElement = document.getElementById('mapaClima');
    if (mapaElement) {
      mapaElement.innerHTML = `
        <div style="text-align: center; padding: 50px; color: #666;">
          <h3> Mapa de Temperaturas de Paraguay</h3>
          <div style="margin: 20px;">
            ${this.datosTemperatura.map(zona => 
              `<strong>${zona.departamento}:</strong> ${zona.temperatura}°C<br>`
            ).join('')}
          </div>
          <small>Leaflet no pudo cargarse - Mostrando datos estáticos</small>
        </div>
      `;
    }
  }

  // Función pública para usar en el template
  getColorTemperatura(temp: number): string {
    if (temp < 20) return '#3b8fc7ff';
    if (temp < 25) return '#2e8f65ff';
    if (temp < 30) return '#dd7937ff';
    return '#e74c3c';
  }
}

// verificacion y correcion de commits