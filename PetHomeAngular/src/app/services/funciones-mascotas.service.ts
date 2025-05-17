import { Injectable } from '@angular/core';
import { MascotaService } from './conexion-db.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionesMascotasService {

  constructor(private conexionSrvc:MascotaService) {
    this.getMascotas()
   }

  mascotas: any[] = [];


getMascotas() {
  return this.conexionSrvc.getMascotas().subscribe(
    json => {

      let data:any = json
      this.mascotas = data
      console.log(this.mascotas)
    }
  );
}

getMascota(){
  return this.mascotas
}

getMascotaPorId(id: number) {
  return this.conexionSrvc.getMascotas()
}


getMascotaPorEspecie(especie: string) {
  return this.conexionSrvc.getMascotasPorEspecie(especie).subscribe(
    json => {

      let data:any = json
      this.mascotas = data
      console.log(this.mascotas)
    }
  );
}

getMascotaPorEdad(rangoEdad: string): any[] {
  const [min, max] = rangoEdad.split('-').map(n => +n); // convierte '2-4' en [2, 4]
  
  const resultado = this.mascotas.filter(m => m.edad >= min && m.edad <= max);
  
  console.log(`Mascotas filtradas por edad ${min}-${max}:`, resultado);
  
  return resultado;
}

getMascotasPorProtectoraTop3(id: number) {
  this.conexionSrvc.getMascotasPorProtectora(id).subscribe(json => {
    let data: any[] = json;

    // Ordena por fecha de creación (de más reciente a más antigua)
    data.sort((a, b) => new Date(b.fechaCreacion).getTime() - new Date(a.fechaCreacion).getTime());

    // Toma solo las 3 primeras
    this.mascotas = data.slice(0, 3);

    console.log(this.mascotas);
  });
}

}
