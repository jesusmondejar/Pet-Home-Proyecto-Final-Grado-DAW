import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ultima-mascota-card',
  imports: [],
  templateUrl: './ultima-mascota-card.component.html',
  styles: `
  .card {
    position: relative;
    width: 200px;
    height: 150px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
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
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }
  
  .card__content {
    position: absolute;
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
  .button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  gap: 15px;
  background-color: #fc713e;
  outline: 3px #fc713e solid;
  outline-offset: -3px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 400ms;
  height: 60%; 
}

.button .text {
  color: white;
  font-weight: 600;
  font-size: 15px;
  transition: 400ms;
  margin: 0;
}

.button:hover {
  background-color: transparent;
}

.button:hover .text {
  color: black;
}
 `
})
export class UltimaMascotaCardComponent {
@Input() mascota: any
}
