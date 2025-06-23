import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuncionesMascotasService } from '../../services/funciones-mascotas.service';
import { MascotaService } from '../../services/conexion-db.service';
import { MascotaCardComponent } from '../adopta/mascota-card/mascota-card.component';
import { FuncionesOrganizacionesService } from '../../services/funciones-organizaciones.service';

@Component({
  selector: 'app-organizaciones-detalle',
  imports: [MascotaCardComponent],
  templateUrl: './organizaciones-detalle.component.html',
  styles: `
  .org-title {
    font-size: 1.6rem;
    font-weight: 600;
    color: #333;
  }

  .org-text {
    color: #555;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }
  `
})
export class OrganizacionesDetalleComponent {
  backendUrl = 'http://localhost:8000/';
  org: any
  mascotaID: any
  protectoraID: any
  mascotas: any[] = []
  constructor(private router: ActivatedRoute,
    private conxionSrvc: FuncionesMascotasService,
    private conxionSrvc2: MascotaService,
    private funcionesOrganizaciones: FuncionesOrganizacionesService
  ) { }


  ngOnInit(): void {
    this.protectoraID = this.router.snapshot.paramMap.get("id")

    this.funcionesOrganizaciones.getOrganizacionPorId(this.protectoraID).subscribe(
      json => {
        let data: any = json
        this.org = data.find((organizacion: any) => organizacion.id == this.protectoraID);
        this.loadMascotas();
      }
    );
  }

  getOrg() {
    return this.org
  }

  loadMascotas() {
    this.conxionSrvc2.getMascotasPorProtectora(this.org.id).subscribe(json => {
      this.mascotas = json;
    });
  }


}
