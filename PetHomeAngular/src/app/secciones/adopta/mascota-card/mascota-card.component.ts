import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mascota-card',
  imports: [RouterLink],
  templateUrl: './mascota-card.component.html',
  styles: `
  .card {
    position: relative;
    width: 300px;
    height: 200px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  .card:hover {
  transform: scale(1.05);
  background-color: rgba(255, 255, 255, 0.1); /* Fondo casi transparente */
  backdrop-filter: blur(8px); /* efecto de desenfoque */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* sombra más elegante */
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
    font-size: 24px;
    color: #333;
    font-weight: 700;
  }
  
  .card:hover svg {
    scale: 0;
  }
  
  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
  }

.btn-naranja {
   margin: 10px 10px 0 0;
  background-color: #fc713e;
  border: 3px solid #fc713e; /* Mejor usar border que outline */
  color: white;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: 400ms;
  box-sizing: border-box;
}

.btn-naranja:hover {
  background-color: transparent;
  color: black;
 
  
}
.button:hover .text {
  color: black;
}
  `
})
export class MascotaCardComponent {
  @Input() mascota: any;
  backendUrl = 'http://localhost:8000';

}
