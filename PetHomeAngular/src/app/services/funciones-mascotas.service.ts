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

getMascotaPorProtectora(id: number) {
  return this.conexionSrvc.getMascotasPorProtectora(id).subscribe(
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


getMascotaPorTamano(tamano: string): any[] {
  const resultado = this.mascotas.filter(m => m.tamanio == tamano);

  console.log(`Mascotas filtradas por tamaño "${tamano}":`, resultado);

  return resultado;
}


getMascotaPorGenero(genero: string): any[] {
  const resultado = this.mascotas.filter(m => m.genero == genero);

  console.log(`Mascotas filtradas por género "${genero}":`, resultado);

  return resultado;
}






}
