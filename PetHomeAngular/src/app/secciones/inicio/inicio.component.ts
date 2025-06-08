import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MascotaCardComponent } from '../adopta/mascota-card/mascota-card.component';
import { FuncionesMascotasService } from '../../services/funciones-mascotas.service';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink, MascotaCardComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'] // Aquí se enlaza automáticamente
})
export class InicioComponent implements AfterViewInit {

  constructor(private funcionesMascotas: FuncionesMascotasService) {
      this.funcionesMascotas.getMascotas(); 
     }

  @ViewChild('carouselInner', { static: false }) grande!: ElementRef;
  @ViewChildren('dot') puntos!: QueryList<ElementRef>;

  totalItems = 0;

  getMascotas() {
    return [1, 2, 3, 4, 5]; 
  }

   getMascotasReal() {
    return this.funcionesMascotas.getMascota()
  }

  ngAfterViewInit(): void {
    const grande = document.querySelector('.grande') as HTMLElement;
    const puntos = document.querySelectorAll('.punto');

    puntos.forEach((punto, i) => {
      punto.addEventListener('click', () => {
        const operacion = i * -100;
        if (grande) {
          grande.style.transform = `translateX(${operacion}%)`;
        }

        puntos.forEach(p => p.classList.remove('activo'));
        punto.classList.add('activo');
      });
    });
  }
}