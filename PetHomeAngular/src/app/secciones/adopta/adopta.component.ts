import { Component } from '@angular/core';
import { FuncionesMascotasService } from '../../services/funciones-mascotas.service';
import { MascotaCardComponent } from "./mascota-card/mascota-card.component";

@Component({
  selector: 'app-adopta',
  imports: [MascotaCardComponent],
  templateUrl: './adopta.component.html',
  styles: `
  .section-title,
  .section-subtitle,
  .card-title,
  .card-text,
  .btn-outline-primary {
    color: #fc713e !important;
  }
  

  .adopta-container .card {
    margin-bottom: 30px;
  }
  
 
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
 .hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
export class AdoptaComponent {

  constructor(private funcionesMascotas: FuncionesMascotasService) {
    this.funcionesMascotas.getMascotas(); 
    this.mascotasFiltradas = this.funcionesMascotas.getMascota(); 
   }

  especieSeleccionadaPerro: string = 'Perro';
  especieSeleccionadaGato: string = 'Gato';
  especieSeleccionadaOtro: string = 'Otro';

  edadSeleccionada0_1: string = '0-1';
  edadSeleccionada1_2: string = '1-2';
  edadSeleccionada2_4: string = '2-4';
  edadSeleccionada4_6: string = '4-6';
  edadSeleccionada6_10: string = '6-10';

  mascotasFiltradas: any[] = [];

 


  getMascotas() {
    return this.funcionesMascotas.getMascota()
  }

  getMascotasPorEspecie(especie: string) {
    return this.funcionesMascotas.getMascotaPorEspecie(especie)
    
  }
  
  filtrarMascotas(especie: string, edad: string) {
    const especieFiltrada = this.funcionesMascotas.getMascotaPorEspecie(especie);
    this.mascotasFiltradas = this.funcionesMascotas.getMascotaPorEdad(edad);
  }


  getMascotasPorEdad(rangoEdad: string) {
    this.mascotasFiltradas = this.funcionesMascotas.getMascotaPorEdad(rangoEdad)
  }
}
