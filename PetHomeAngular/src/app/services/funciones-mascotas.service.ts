import { Injectable } from '@angular/core';
import { MascotaService } from './conexion-db.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionesMascotasService {

  constructor(private conexionSrvc:MascotaService) {
    this.getMascotas()
    this.mascotasFavoritas = JSON.parse(localStorage.getItem("mascotasFavoritas") || "[]")
   }

  mascotas: any[] = [];
  mascotasFavoritas: any[] = [];


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

getMascotasFavoritas() {
  return this.mascotasFavoritas
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


addPet(newPet:any) {
    if ( !this.isAlreadyInMyPets(newPet) ) {
      this.mascotasFavoritas.push(newPet)
      this.saveAll()
    }
  }


  isAlreadyInMyPets(aPet:any) {
    return this.mascotasFavoritas.find( c => c.id == aPet.id )
  }
  

saveAll() {

      localStorage.setItem("mascotasFavoritas", JSON.stringify(this.mascotasFavoritas));

    }





}
