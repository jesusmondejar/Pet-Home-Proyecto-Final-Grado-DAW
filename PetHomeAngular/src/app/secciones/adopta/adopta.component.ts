import { Component } from '@angular/core';
import { FuncionesMascotasService } from '../../services/funciones-mascotas.service';
import { MascotaCardComponent } from "./mascota-card/mascota-card.component";

@Component({
  selector: 'app-adopta',
  imports: [MascotaCardComponent],
  templateUrl: './adopta.component.html',
  styles: ``
})
export class AdoptaComponent {

  constructor(private funcionesMascotas: FuncionesMascotasService) { }


  getMascotas() {
    return this.funcionesMascotas.getMascota()
  }



}
