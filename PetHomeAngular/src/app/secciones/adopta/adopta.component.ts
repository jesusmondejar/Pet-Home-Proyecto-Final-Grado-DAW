import { Component } from '@angular/core';
import { FuncionesMascotasService } from '../../services/funciones-mascotas.service';

@Component({
  selector: 'app-adopta',
  imports: [],
  templateUrl: './adopta.component.html',
  styles: ``
})
export class AdoptaComponent {

  constructor(private funcionesMascotas: FuncionesMascotasService) { }


  getMascotas() {
    this.funcionesMascotas.getMascotas()
  }


  
}
