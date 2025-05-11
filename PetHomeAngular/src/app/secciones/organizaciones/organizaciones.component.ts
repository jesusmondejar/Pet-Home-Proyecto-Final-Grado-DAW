import { Component, Input } from '@angular/core';
import { FuncionesOrganizacionesService } from '../../services/funciones-organizaciones.service';
import { OrganizacionCardComponent } from './organizacion-card/organizacion-card.component';

@Component({
  selector: 'app-organizaciones',
  imports: [OrganizacionCardComponent],
  templateUrl: './organizaciones.component.html',
  styles: `.hero {
    position: relative;
    width: 100%;
    height: 70vh; /* Alto de la sección héroe */
    background: url('/assets/img/perros.jpg') no-repeat center center;
    background-size: cover;
  }
  .organizacion-card-section {
    
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    margin: 2rem;
  }`
})
export class OrganizacionesComponent {

  constructor(private funcionesOrganizaciones: FuncionesOrganizacionesService) {
      this.funcionesOrganizaciones.getOrganizaciones(); // carga datos al inicio
      // this.organizacionesFiltradas = this.funcionesOrganizaciones.getOrganizacion();  muestra todos por defecto
     }


     getOrganizaciones() {
      return this.funcionesOrganizaciones.getOrganizacion()
    }
}
