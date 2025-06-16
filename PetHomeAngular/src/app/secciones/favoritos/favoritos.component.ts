import { Component } from '@angular/core';
import { MascotaCardComponent } from '../adopta/mascota-card/mascota-card.component';
import { FuncionesMascotasService } from '../../services/funciones-mascotas.service';

@Component({
  selector: 'app-favoritos',
  imports: [MascotaCardComponent],
  templateUrl: './favoritos.component.html',
  styles: `
     /* descubre */
.fav-section {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  margin: 2rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
}`
})
export class FavoritosComponent {

  
   constructor(private funcionesMascotas: FuncionesMascotasService) {
        this.funcionesMascotas.getMascotas(); 
        this.mascotas = this.getMascotas();
       }


  mascotas: any[] = [];


  getMascotas() {
    return this.funcionesMascotas.getMascota()
  }

}
