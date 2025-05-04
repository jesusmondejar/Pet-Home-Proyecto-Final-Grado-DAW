import { Injectable } from '@angular/core';
import { MascotaService } from './conexion-db.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionesMascotasService {

  constructor(private conexionSrvc:MascotaService) { }

  mascotas: any[] = [];


getMascotas() {
  return this.conexionSrvc.getMascotas().subscribe(
    json => {

      let data:any = json
      this.mascotas = data
    }
  );

  
   


}

getMascota(){
  return this.mascotas
}

getMascotaPorEspecie(especie: string) {
  return this.conexionSrvc.getMascotasPorEspecie(especie)
}


getMascotaPorProtectora(id: number) {
  return this.conexionSrvc.getMascotasPorProtectora(id)
}
}
