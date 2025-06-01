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
  styles: ``
})
export class OrganizacionesDetalleComponent {

  org:any
  mascotaID:any
  protectoraID:any
  mascotas:any[] = []
  constructor(private router:ActivatedRoute,
              private conxionSrvc:FuncionesMascotasService,
              private conxionSrvc2:MascotaService,
              private funcionesOrganizaciones: FuncionesOrganizacionesService
  ) {}


  ngOnInit(): void {
    this.protectoraID=this.router.snapshot.paramMap.get("id") 

    this.funcionesOrganizaciones.getOrganizacionPorId(this.protectoraID).subscribe(
    json => {
    let data:any = json
    this.org = data.find((organizacion: any) => organizacion.id == this.protectoraID);
    console.log(this.org)
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
      console.log(this.mascotas);
    });
  }


}
