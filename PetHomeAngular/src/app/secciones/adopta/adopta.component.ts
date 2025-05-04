import { Component } from '@angular/core';
import { FuncionesMascotasService } from '../../services/funciones-mascotas.service';
import { MascotaCardComponent } from "./mascota-card/mascota-card.component";

@Component({
  selector: 'app-adopta',
  imports: [MascotaCardComponent],
  templateUrl: './adopta.component.html',
  styles: `/* Color principal naranja */
  .section-title,
  .section-subtitle,
  .card-title,
  .card-text,
  .btn-outline-primary {
    color: #fc713e !important;
  }
  
  /* Espacio entre tarjetas */
  .adopta-container .card {
    margin-bottom: 30px;
  }
  
  /* Botón estilo personalizado */
  .btn-outline-primary {
    border-color: #fc713e;
  }
  
  .btn-outline-primary:hover {
    background-color: #fc713e;
    color: white;
  }
  `
})
export class AdoptaComponent {

  constructor(private funcionesMascotas: FuncionesMascotasService) { }


  getMascotas() {
    return this.funcionesMascotas.getMascota()
  }



}
