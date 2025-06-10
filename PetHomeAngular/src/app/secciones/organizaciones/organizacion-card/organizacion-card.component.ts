import { Component, Input, SimpleChanges } from '@angular/core';
import { MascotaCardComponent } from '../../adopta/mascota-card/mascota-card.component';
import { FuncionesMascotasService } from '../../../services/funciones-mascotas.service';
import { MascotaService } from '../../../services/conexion-db.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-organizacion-card',
  imports: [MascotaCardComponent,RouterLink],
  templateUrl: './organizacion-card.component.html',
  styleUrl: './organizacion-card.component.css'
})
export class OrganizacionCardComponent {
  @Input() org: any
  mascotas:any[] = []
 
  constructor(private funcionesMascotas: FuncionesMascotasService, private conxionSrvc2:MascotaService) {
     }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['org'] && this.org) {
      this.loadMascotas();
    }
  }

  loadMascotas() {
    this.conxionSrvc2.getMascotasPorProtectora(this.org.id).subscribe(json => {
      this.mascotas = json;
      console.log(this.mascotas);
    });
  }
}

