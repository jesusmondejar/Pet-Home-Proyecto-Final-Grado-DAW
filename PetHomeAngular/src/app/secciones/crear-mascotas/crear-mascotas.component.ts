import { Component } from '@angular/core';
import { MascotaService } from '../../services/conexion-db.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-crear-mascotas',
  imports: [ CommonModule,
    ReactiveFormsModule],
  templateUrl: './crear-mascotas.component.html',
  styles: `
   /* Estilos generales - Añadido margen vertical */
.form-wrapper {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  margin: 3rem 0; /* Separación añadida arriba y abajo */
}

/* Contenedor del formulario */
.form-container {
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  padding: 2.5rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Título del formulario */
.form-container h2 {
  color: #2c3e50;
  margin-bottom: 1.8rem;
  padding-bottom: 1rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  border-bottom: 1px solid #eee; /* Línea decorativa bajo el título */
}

/* Grupos de formulario */
.form-group {
  margin-bottom: 1.8rem;
}

/* Labels */
.form-group label {
  display: block;
  margin-bottom: 0.8rem;
  font-weight: 600;
  color: #34495e;
  font-size: 1.1rem;
}

/* Campos de entrada */
.form-group input[type="text"],
.form-group input[type="number"],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #fafafa;
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
}

/* Efectos focus */
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #fc713e;
  background-color: white;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  outline: none;
}

/* Radio buttons */
.radio-group {
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
}

.radio-option input[type="radio"] {
  width: 18px;
  height: 18px;
  accent-color: #fc713e;
}

/* Pie del formulario */
.form-footer {
  margin-top: 2.5rem;
  border-top: 1px solid #eee;
  padding-top: 1.8rem;
}

/* Pregunta de adopción */
.adoption-question {
  font-size: 1.3rem;
  font-weight: 700;
  color: #fc713e;
  margin-bottom: 1.5rem;
  text-align: center;
}

/* Info de contacto */
.contact-info {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.contact-info div {
  margin-bottom: 0;
  color: #34495e;
  font-size: 1rem;
}

/* Enlace "Ver más" */
.view-more {
  color: #fc713e;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  grid-column: span 2;
  text-align: center;
  margin-top: 0.5rem;
}

/* Botón de submit */
button[type="submit"] {
  width: 100%;
  padding: 1.2rem;
  background-color: #fc713e;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

button[type="submit"]:hover {
  background-color: #fc713e;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button[type="submit"]:disabled {
  background-color:rgb(255, 132, 87);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Placeholders */
::placeholder {
  color: #95a5a6;
  opacity: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .form-wrapper {
    padding: 1.5rem 1rem;
    margin: 2rem 0; /* Ajuste para móviles */
  }
  
  .form-container {
    padding: 1.8rem;
  }
  
  .radio-group {
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .contact-info {
    grid-template-columns: 1fr;
  }
  
  .view-more {
    grid-column: span 1;
  }
}

@media (max-width: 480px) {
  .form-wrapper {
    margin: 1.5rem 0; /* Menor separación en móviles pequeños */
    padding: 1rem 0.5rem;
  }
  
  .form-container {
    padding: 1.5rem 1rem;
    border-radius: 8px;
  }
  
  .form-container h2 {
    font-size: 1.5rem;
  }
  
  button[type="submit"] {
    padding: 1rem;
  }

  .required {
  color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  animation: fadeIn 0.3s ease-in-out;
}

/* Campos inválidos */
.ng-invalid.ng-touched:not(form) {
  border-color: #e74c3c !important;
}

.ng-invalid.ng-touched:not(form):focus {
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2) !important;
}

.required-note {
  font-size: 0.9em;
  color: #555;
  margin-top: 10px;
}

.required {
  color: red;
  font-weight: bold;
}
/* Animación para mensajes de error */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
}`
})
export class CrearMascotasComponent {
  registerForm!: FormGroup;

   provincias: string[] = [
    "Álava/Araba", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz", "Baleares", "Barcelona",
    "Burgos", "Cáceres", "Cádiz", "Cantabria", "Castellón", "Ceuta", "Ciudad Real", "Córdoba", "Cuenca",
    "Gerona/Girona", "Granada", "Guadalajara", "Guipúzcoa/Gipuzkoa", "Huelva", "Huesca", "Jaén",
    "La Coruña/A Coruña", "La Rioja", "Las Palmas", "León", "Lérida/Lleida", "Lugo", "Madrid", "Málaga",
    "Melilla", "Murcia", "Navarra", "Orense/Ourense", "Palencia", "Pontevedra", "Salamanca", "Segovia",
    "Sevilla", "Soria", "Tarragona", "Tenerife", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya/Bizkaia",
    "Zamora", "Zaragoza"
  ];

  constructor(
    private fb: FormBuilder,
    private mascotaService: MascotaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const protectoraId = localStorage.getItem('id');
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      especie: ['', Validators.required],
      raza: [''],
      edad: [''],
      tamanio: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: ['Disponible'],
      localidad: ['', Validators.required],
      genero: [''],
      caracteristicas: [''],
      salud: ['', Validators.required],
      protectora_id: [protectoraId] // si es requerido
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    const datos = this.registerForm.value;

    this.mascotaService.crearMascota(datos).subscribe({
      next: (res) => {
        console.log('Registro exitoso', res);
        this.router.navigate(['/adopta']); // Redirigir a la página de detalle de la mascota creada
        this.registerForm.reset(); // Limpiar el formulario después del registro
        alert('Mascota registrada exitosamente');
      },
      error: (err) => {
        console.error('Error en el registro', err);
      }
    });
  }
}



