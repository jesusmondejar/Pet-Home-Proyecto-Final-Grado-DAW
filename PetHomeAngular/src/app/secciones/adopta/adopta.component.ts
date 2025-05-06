import { Component } from '@angular/core';
import { FuncionesMascotasService } from '../../services/funciones-mascotas.service';
import { MascotaCardComponent } from "./mascota-card/mascota-card.component";

@Component({
  selector: 'app-adopta',
  imports: [MascotaCardComponent],
  templateUrl: './adopta.component.html',
  styles: `/* Color principal naranja */
  .section-title,
  .section-subtitle,
  .card-title,
  .card-text,
  .btn-outline-primary {
    color: #fc713e !important;
  }
  
  /* Espacio entre tarjetas */
  .adopta-container .card {
    margin-bottom: 30px;
  }
  
  /* Botón estilo personalizado */
  .btn-outline-primary {
    border-color: #fc713e;
  }
  
  .btn-outline-primary:hover {
    background-color: #fc713e;
    color: white;
  }

  select,
::picker(select) {
  appearance: base-select;
}
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  width: 100%;
  padding: 0 10px;
  max-width: 480px;
  margin: 0 auto;
}

h2 {
  font-size: 1.2rem;
}

p {
  display: flex;
  gap: 10px;
}

label {
  width: fit-content;
  align-self: center;
}

select {
  flex: 1;
}
select {
  border: 2px solid #ddd;
  background: #eee;
  padding: 10px;
  transition: 0.4s;
}

select:hover,
select:focus {
  background: #ddd;
}
select::picker-icon {
  color: #999;
  transition: 0.4s rotate;
}
select:open::picker-icon {
  rotate: 180deg;
}
::picker(select) {
  border: none;
}
option {
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  border: 2px solid #ddd;
  background: #eee;
  padding: 10px;
  transition: 0.4s;
}
option:first-of-type {
  border-radius: 8px 8px 0 0;
}

option:last-of-type {
  border-radius: 0 0 8px 8px;
}

option:not(option:last-of-type) {
  border-bottom: none;
}
option:nth-of-type(odd) {
  background: #fff;
}

option:hover,
option:focus {
  background: plum;
}
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
selectedcontent .icon {
  display: none;
}
option:checked {
  font-weight: bold;
}
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
::picker(select):popover-open {
  opacity: 1;
}
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
/* From Uiverse.io by JkHuger */ 
.radio-container {
  margin: 0 auto;
  max-width: 300px;
  color: black;
}

.radio-wrapper {
  margin-bottom: 20px;
}

.radio-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.radio-button:hover {
  transform: translateY(-2px);
}

.radio-button input[type="radio"] {
  display: none;
}

.radio-checkmark {
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  border: 2px solid #333;
  border-radius: 50%;
}

.radio-checkmark:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #333;
  transition: all 0.2s ease-in-out;
}

.radio-button input[type="radio"]:checked ~ .radio-checkmark:before {
  transform: translate(-50%, -50%) scale(1);
}

.radio-label {
  font-size: 16px;
  font-weight: 600;
}
.hero {
    position: relative;
    width: 100%;
    height: 70vh; /* Alto de la sección héroe */
    background: url('/assets/img/pexels-cdomingues10-731022.jpg') no-repeat center center;
    background-size: cover;
  }
  
  .hero .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4); /* capa semitransparente */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
  }
  
  .hero .overlay h1 {
    color: #fff;
    font-size: 3rem;
    margin-bottom: 1.5rem;
    text-shadow: 0 2px 8px rgba(0,0,0,0.6);
  }
  `
})
export class AdoptaComponent {

  constructor(private funcionesMascotas: FuncionesMascotasService) { }


  getMascotas() {
    return this.funcionesMascotas.getMascota()
  }



}
