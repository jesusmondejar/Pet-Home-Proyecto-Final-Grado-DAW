import { Component } from '@angular/core';
import { MascotaService } from '../../services/conexion-db.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { FuncionesMascotasService } from '../../services/funciones-mascotas.service';

@Component({
  selector: 'app-crear-mascotas',
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './crear-mascotas.component.html',
  styles: `.preview-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.img-preview {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #ddd;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.form-wrapper {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  margin: 3rem 0;
}

.form-container {
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  padding: 2.5rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

.form-container h2 {
  color: #2c3e50;
  margin-bottom: 1.8rem;
  padding-bottom: 1rem;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 600;
  border-bottom: 1px solid #eee;
}

.form-group {
  margin-bottom: 1.8rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.8rem;
  font-weight: 600;
  color: #34495e;
  font-size: 1.4rem;
}

.form-group input[type="text"],
.form-group input[type="number"],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  background-color: #fafafa;
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #fc713e;
  background-color: white;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  outline: none;
}

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

button[type="submit"] {
  width: 100%;
  padding: 1.2rem;
  background-color: #fc713e;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.8rem;
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
  background-color: rgb(255, 132, 87);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

::placeholder {
  color: #95a5a6;
  opacity: 1;
}

.required {
  color: #e74c3c;
  font-weight: bold;
}

.error-message {
  color: #e74c3c;
  font-size: 1rem;
  margin-top: 0.5rem;
  animation: fadeIn 0.3s ease-in-out;
}

.ng-invalid.ng-touched:not(form) {
  border-color: #e74c3c !important;
}

.ng-invalid.ng-touched:not(form):focus {
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2) !important;
}

.required-note {
  font-size: 1em;
  color: #555;
  margin-top: 10px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .form-wrapper {
    padding: 1.5rem 1rem;
    margin: 2rem 0;
  }
  
  .form-container {
    padding: 1.8rem;
  }
  
  .radio-group {
    flex-direction: column;
    gap: 0.8rem;
  }
}

@media (max-width: 480px) {
  .form-wrapper {
    margin: 1.5rem 0;
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


}`
})
export class CrearMascotasComponent {
  registerForm!: FormGroup;
  isEditMode = false;
  mascotaId: any;
  mascota: any;
  oldImageUrls: string[] = []; // Para almacenar las URLs de las imágenes antiguas

  provincias: string[] = [
  "Abanilla", "Abarán", "Águilas", "Albudeite", "Alcantarilla", "Alguazas", "Alhama de Murcia",
  "Archena", "Beniel", "Blanca", "Bullas", "Calasparra", "Campos del Río", "Caravaca de la Cruz",
  "Cartagena", "Cehegín", "Ceutí", "Cieza", "Fortuna", "Fuente Álamo de Murcia", "Jumilla",
  "La Unión", "Las Torres de Cotillas", "Librilla", "Lorca", "Lorquí", "Los Alcázares",
  "Mazarrón", "Molina de Segura", "Moratalla", "Mula", "Murcia", "Ojós", "Pliego",
  "Puerto Lumbreras", "Ricote", "San Javier", "San Pedro del Pinatar", "Santomera",
  "Torre-Pacheco", "Ulea", "Villanueva del Río Segura", "Yecla"
];


  constructor(
    private fb: FormBuilder,
    private mascotaService: MascotaService,
    private mascotafuncionesService: FuncionesMascotasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

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

     this.mascotaId = this.route.snapshot.paramMap.get("id")
      if (this.mascotaId) {
        this.isEditMode = true;
        this.cargarDatosMascota(this.mascotaId);
      }
    
  }

  cargarDatosMascota(id: number): void {
    this.mascotafuncionesService.getMascotaPorId(id).subscribe( json => {
        let data: any = json
        this.mascota = data.find((mascota: any) => mascota.id == this.mascotaId);
        console.log(this.mascota)
      this.registerForm.patchValue(this.mascota);

      // Cargar imágenes antiguas (URLs)
      if (this.mascota.imagenes && Array.isArray(this.mascota.imagenes)) {
        this.oldImageUrls = this.mascota.imagenes;
      }
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    const formData = new FormData();
    Object.entries(this.registerForm.value).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, String(value));
      }
    });


    this.imageFiles.forEach((file, index) => {
      formData.append('imagenes[]', file, file.name);
    });

    

    if (this.isEditMode) {
      this.oldImageUrls.forEach(url => {
      formData.append('imagenes[]', url); // ajusta este nombre según tu backend
    });
      this.mascotaService.editarMascota(this.mascotaId, formData).subscribe({
       next: res => {
       Swal.fire({
                   icon: 'success',
                   title: 'Edición exitosa',
                   text: 'La mascota ha sido editada correctamente',
                   confirmButtonText: 'Aceptar',
                   customClass: {
                     confirmButton: 'btn-naranja-swal'
                   },
                   buttonsStyling: false
                 }).then(() => {
                    const protectoraId = localStorage.getItem('id');

                    // Redirigir a la página de la protectora
                    if (protectoraId) {
                      this.router.navigate([`/detalle-organizacion/${protectoraId}`]);
                    } else {
                      console.warn('No se encontró el ID de la protectora en localStorage');
                      this.router.navigate(['/organizaciones']);
                    }
                 });
               },
               error: (err) => {
                 console.error('Error al editar la mascota:', err);
                 Swal.fire({
                   icon: 'error',
                   title: 'Error',
                   text: 'Hubo un error al editar la mascota.',
                   confirmButtonText: 'Cerrar',
                   customClass: {
                     confirmButton: 'btn-naranja-swal'
                   },
                   buttonsStyling: false
                 });
               }
             });
    } else
    {
      this.mascotaService.crearMascota(formData).subscribe({
      next: res => {
       Swal.fire({
                   icon: 'success',
                   title: 'Creación exitosa',
                   text: 'La mascota ha sido creada correctamente',
                   confirmButtonText: 'Aceptar',
                   customClass: {
                     confirmButton: 'btn-naranja-swal'
                   },
                   buttonsStyling: false
                 }).then(() => {
                   const protectoraId = localStorage.getItem('id');

                    // Redirigir a la página de la protectora
                    if (protectoraId) {
                      this.router.navigate([`/detalle-organizacion/${protectoraId}`]);
                    } else {
                      console.warn('No se encontró el ID de la protectora en localStorage');
                      this.router.navigate(['/organizaciones']);
                    }
                 });
               },
               error: (err) => {
                 console.error('Error al crear la mascota:', err);
                 Swal.fire({
                   icon: 'error',
                   title: 'Error',
                   text: 'Hubo un error al crear la mascota.',
                   confirmButtonText: 'Cerrar',
                   customClass: {
                     confirmButton: 'btn-naranja-swal'
                   },
                   buttonsStyling: false
                 });
               }
             });
    }
    
  }



  imageFiles: File[] = [];
  imagePreviews: string[] = [];

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;

    if (target.files) {
      this.imageFiles = Array.from(target.files);
      this.imagePreviews = [];

      this.imageFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePreviews.push(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    }
  }


}



