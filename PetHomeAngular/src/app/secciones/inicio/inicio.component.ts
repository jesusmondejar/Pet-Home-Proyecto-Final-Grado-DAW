import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MascotaCardComponent } from '../adopta/mascota-card/mascota-card.component';
import { FuncionesMascotasService } from '../../services/funciones-mascotas.service';

@Component({
  selector: 'app-inicio',
  imports: [ MascotaCardComponent, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'] // Aquí se enlaza automáticamente
})
export class InicioComponent  {

  constructor(private funcionesMascotas: FuncionesMascotasService) {
      this.getMascotas();
     }

       


   getMascotas() {
    return this.funcionesMascotas.getMascota()
  }

  
}