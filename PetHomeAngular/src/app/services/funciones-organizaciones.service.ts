import { Injectable } from '@angular/core';
import { OrganizacionService } from './conexion-db.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionesOrganizacionesService {

  constructor(private conexionOrg: OrganizacionService) {
    this.getOrganizaciones();
  }

  organizaciones: any[] = [];

  /** Carga todas las organizaciones desde el backend */
  getOrganizaciones() {
    return this.conexionOrg.getOrganizaciones().subscribe(json => {

      let data:any = json
      this.organizaciones = data
      console.log(this.organizaciones)
    });
  }

  /** Devuelve el array actual de organizaciones */
  getOrganizacion() {
    return this.organizaciones;
  }

  /**
   * Filtra organizaciones por provincia
   * (asume que el servicio conexionOrg tiene este método)
   */
  getOrganizacionesPorProvincia(provincia: string) {
    return this.conexionOrg.getOrganizacionesPorProvincia(provincia).subscribe(json => {
      const data: any = json;
      this.organizaciones = data;
      console.log(`Organizaciones en ${provincia}:`, this.organizaciones);
    });
  }
}
