import { Component, Input } from '@angular/core';
import { MascotaCardComponent } from '../../adopta/mascota-card/mascota-card.component';
import { FuncionesMascotasService } from '../../../services/funciones-mascotas.service';

@Component({
  selector: 'app-organizacion-card',
  imports: [MascotaCardComponent],
  templateUrl: './organizacion-card.component.html',
  styleUrl: './organizacion-card.component.css'
})
export class OrganizacionCardComponent {
  @Input() org: any


  constructor(private funcionesMascotas: FuncionesMascotasService) {
      this.funcionesMascotas.getMascotas();
     }

  getMascotas() {
    return this.funcionesMascotas.getMascota()
  }
}
