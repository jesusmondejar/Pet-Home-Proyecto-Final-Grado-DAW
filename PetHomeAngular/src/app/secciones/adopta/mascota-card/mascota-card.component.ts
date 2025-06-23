import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FuncionesMascotasService } from '../../../services/funciones-mascotas.service';

@Component({
  selector: 'app-mascota-card',
  imports: [],
  templateUrl: './mascota-card.component.html',
  styles: `
  .card {
  position: relative;
  width: 250px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.05);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card__content {
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 1.7rem;
  color: #333;
  font-weight: 700;
}

.card__description {
  margin: 10px 0 0;
  font-size: 1rem;
  color: #777;
  line-height: 1.4;
}

.favorite-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
}

.favorite-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fc713e;
  border: 3px solid #fc713e;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 10px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  color: white;
  text-decoration: none;
}

.favorite-btn:hover {
  box-shadow: 0 6px 10px rgba(0,0,0,0.15);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
  `
})
export class MascotaCardComponent {
  @Input() mascota: any;
  backendUrl = 'http://localhost:8000';

  mascotasFavoritas: any[] = [];


  constructor(private funcionesMascotas: FuncionesMascotasService) {
    // Aquí podrías inicializar algo si es necesario
    this.funcionesMascotas.getMascotasFavoritas(); 
    this.mascotasFavoritas = JSON.parse(localStorage.getItem("mascotasFavoritas") || "[]");
  }


  addPet(mascota: any) {

    return this.funcionesMascotas.addPet(this.mascota)

  }

}
