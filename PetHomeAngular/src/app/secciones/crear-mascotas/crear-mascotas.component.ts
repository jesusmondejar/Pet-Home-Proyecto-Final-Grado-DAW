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
   body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background: url('https://i.imgur.com/CTyAoWZ.png'); /* Imagen de fondo similar */
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

    .container {
      background-color: #fff;
      border-radius: 10px;
      padding: 30px;
      max-width: 1100px;
      width: 100%;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
    }

    .left, .right {
      flex: 1;
      min-width: 300px;
    }

    .image-upload {
      width: 100%;
      height: 200px;
      background-color: #f0f0f0;
      border: 2px dashed #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      color: #999;
      margin-bottom: 20px;
      cursor: pointer;
    }

    .thumbnails {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }

    .thumbnails div {
      width: 70px;
      height: 70px;
      background-color: #e0e0e0;
      border-radius: 5px;
      background-image: url('https://img.icons8.com/ios-filled/50/image.png');
      background-size: 50%;
      background-position: center;
      background-repeat: no-repeat;
      cursor: pointer;
    }

    .form-group {
      margin-bottom: 15px;
    }

    .form-group label {
      font-weight: bold;
      display: block;
      margin-bottom: 5px;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ff764d;
      border-radius: 5px;
    }

    .sidebar {
      background-color: #f5f5f5;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
    }

    .sidebar h3 {
      margin-bottom: 15px;
    }

    .btn {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      color: white;
      background-color: #ff764d;
      cursor: pointer;
      margin-top: 10px;
      transition: background-color 0.3s ease;
    }

    .btn:hover {
      background-color: #e15d35;
    }

    .small-btn {
      font-size: 0.9em;
      margin-top: 20px;
      background-color: #ff8855;
    }`
})
export class CrearMascotasComponent {
  registerForm!: FormGroup;

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
      tamanio: [''],
      descripcion: [''],
      estado: ['Disponible'],
      localidad: [''],
      genero: [''],
      salud: [''],
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



