import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TemperaturaZona } from '../../models/temperatura-zona.model';

// Declarar Leaflet globalmente
declare var L: any;

@Component({
  selector: 'app-mapa-clima',
  templateUrl: './mapa-clima.component.html',
  styleUrls: ['./mapa-clima.component.scss'],
})
export class MapaClimaComponent implements AfterViewInit {
  private map: any;
  private datosTemperatura: TemperaturaZona[] = [
    {
      id: 1,
      departamento: 'Asunción',
      temperatura: 28,
      lat: -25.3005,
      lng: -57.6362,
      descripcion: 'Soleado'
    },
    {
      id: 2,
      departamento: 'Central',
      temperatura: 27,
      lat: -25.3949,
      lng: -57.5357,
      descripcion: 'Parcialmente nublado'
    },
    {
      id: 3,
      departamento: 'Alto Paraná',
      temperatura: 25,
      lat: -25.5167,
      lng: -54.6167,
      descripcion: 'Lluvias moderadas'
    },
    {
      id: 4,
      departamento: 'Itapúa',
      temperatura: 26,
      lat: -27.3333,
      lng: -55.8333,
      descripcion: 'Nublado'
    },
    {
      id: 5,
      departamento: 'Paraguarí',
      temperatura: 24,
      lat: -25.6333,
      lng: -57.1500,
      descripcion: 'Fresco'
    },
    {
      id: 6,
      departamento: 'Alto Paraguay',
      temperatura: 32,
      lat: -20.5000,
      lng: -59.0000,
      descripcion: 'Muy caluroso'
    }
  ];

  constructor() { }

  ngAfterViewInit() {
    // Esperar a que la vista esté completamente renderizada
    setTimeout(() => {
      this.inicializarMapa();
    }, 100);
  }

  private inicializarMapa() {
    try {
      // Verificar que Leaflet esté disponible
      if (typeof L === 'undefined') {
        console.error('Leaflet no está cargado');
        return;
      }

      // Verificar que el contenedor existe
      const mapContainer = document.getElementById('mapaClima');
      if (!mapContainer) {
        console.error('No se encontró el contenedor del mapa');
        return;
      }

      // Inicializar el mapa
      this.map = L.map('mapaClima').setView([-23.4425, -58.4438], 6);

      // Añadir capa de tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(this.map);

      // Añadir marcadores
      this.añadirMarcadoresTemperatura();

      console.log('Mapa inicializado correctamente');

    } catch (error) {
      console.error('Error al inicializar el mapa:', error);
    }
  }

  private añadirMarcadoresTemperatura() {
    this.datosTemperatura.forEach(zona => {
      const popupContent = `
        <div style="text-align: center; padding: 8px;">
          <strong style="color: #3880ff;">${zona.departamento}</strong><br>
          <span style="font-size: 20px; font-weight: bold; color: ${this.getColorTemperatura(zona.temperatura)};">
            ${zona.temperatura}°C
          </span><br>
          <small style="color: #666;">${zona.descripcion}</small>
        </div>
      `;

      L.marker([zona.lat, zona.lng])
        .addTo(this.map)
        .bindPopup(popupContent)
        .bindTooltip(`${zona.departamento}: ${zona.temperatura}°C`, {
          permanent: false,
          direction: 'top'
        });
    });
  }

  private getColorTemperatura(temp: number): string {
    if (temp < 20) return '#3498db';
    if (temp < 25) return '#2ecc71';
    if (temp < 30) return '#f39c12';
    return '#e74c3c';
  }
}