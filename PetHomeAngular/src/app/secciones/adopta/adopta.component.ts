import { Component } from '@angular/core';
import { FuncionesMascotasService } from '../../services/funciones-mascotas.service';
import { MascotaCardComponent } from "./mascota-card/mascota-card.component";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-adopta',
  imports: [MascotaCardComponent],
  templateUrl: './adopta.component.html',
  styles: `* {
  box-sizing: border-box;
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

.select-municipio{
  font-size: 1.2rem;
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

.radio-input {
  margin-right: 8px;
}

.radio-label {
  font-size: 1.2rem;
  font-weight: 600;
}

.btn-naranja {
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: #fc713e;
  outline: 3px #fc713e solid;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: 400ms;
}

.btn-naranja:hover {
  background-color: transparent;
  color: black;
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
  `
})
export class AdoptaComponent {

  constructor(private funcionesMascotas: FuncionesMascotasService, private authService: AuthService) {
    this.funcionesMascotas.getMascotas();
    this.mascotasFiltradas = this.funcionesMascotas.getMascota();
  }

  // especieSeleccionadaPerro: string = 'Perro';
  // especieSeleccionadaGato: string = 'Gato';
  // especieSeleccionadaOtro: string = 'Otro';

  // edadSeleccionada0_1: string = '0-1';
  // edadSeleccionada1_2: string = '1-2';
  // edadSeleccionada2_4: string = '2-4';
  // edadSeleccionada4_6: string = '4-6';
  // edadSeleccionada6_10: string = '6-10';

  // tamanoSeleccionado: string = '';

  especieSeleccionada: string[] = [];
  tamanoSeleccionado: string[] = [];
  generoSeleccionado: string[] = [];
  provinciaSeleccionada: string = '';



  mascotasFiltradas: any[] = [];


  getMascotas() {
    return this.funcionesMascotas.getMascota()
  }

  getMascotasPorEspecie(especie: string) {
    return this.funcionesMascotas.getMascotaPorEspecie(especie)

  }

  filtrarMascotas(especie: string, edad: string, tamano: string) {
    const especieFiltrada = this.funcionesMascotas.getMascotaPorEspecie(especie);
    this.mascotasFiltradas = this.funcionesMascotas.getMascotaPorEdad(edad);
    this.mascotasFiltradas = this.funcionesMascotas.getMascotaPorTamano(tamano);
  }


  //    getMascotasPorGenero(genero: string) {
  //     this.generoSeleccionado = genero;
  //     this.mascotasFiltradas = this.funcionesMascotas.getMascotaPorGenero(genero)
  //   }

  //   getMascotasPorTamano(tamano: string) {
  //   this.tamanoSeleccionado = tamano;
  //   this.mascotasFiltradas = this.funcionesMascotas.getMascotaPorTamano(tamano);
  // }

  aplicarFiltros() {
    let resultado = this.funcionesMascotas.getMascota();

    if (this.especieSeleccionada.length > 0) {
      resultado = resultado.filter(m => this.especieSeleccionada.includes(m.especie));
    }

    if (this.tamanoSeleccionado.length > 0) {
      resultado = resultado.filter(m => this.tamanoSeleccionado.includes(m.tamanio));
    }

    if (this.generoSeleccionado.length > 0) {
      resultado = resultado.filter(m => this.generoSeleccionado.includes(m.genero));
    }

    if (this.provinciaSeleccionada) {
      resultado = resultado.filter(m => m.localidad === this.provinciaSeleccionada);
    }

    this.mascotasFiltradas = resultado;
  }


  onCheckboxChange(event: any, filtro: string) {
    const value = event.target.value;
    const checked = event.target.checked;

    switch (filtro) {
      case 'especie':
        this.updateFiltroArray(this.especieSeleccionada, value, checked);
        break;
      case 'tamano':
        this.updateFiltroArray(this.tamanoSeleccionado, value, checked);
        break;
      case 'genero':
        this.updateFiltroArray(this.generoSeleccionado, value, checked);
        break;
    }

    this.aplicarFiltros();
  }

  updateFiltroArray(array: string[], value: string, checked: boolean) {
    const index = array.indexOf(value);
    if (checked && index === -1) {
      array.push(value);
    } else if (!checked && index > -1) {
      array.splice(index, 1);
    }
  }


  addPet(aPet: any) {
    if (!this.funcionesMascotas.isAlreadyInMyPets(aPet)) {
      this.funcionesMascotas.addPet(aPet);
    }
  }

}