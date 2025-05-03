// register.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule], // 👈 AÑADE ESTO
  templateUrl: './register.component.html',
  styles: `
    /* register.component.css */

/* Contenedor del formulario */
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Títulos del formulario */
form h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

/* Estilos para los inputs y select */
input, select {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

/* Estilos para el botón de submit */
button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

/* Agregar algo de espaciado */
input, select {
  box-sizing: border-box;
}

/* Mensajes de advertencia */
.warning {
  color: #ff9800;
  font-size: 14px;
  margin-top: 10px;
}

  `
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      telefono: [''],
      direccion: [''],
      tipoUsuario: ['cliente', Validators.required] // Asegúrate de que es obligatorio
    });
  }

  onSubmit() {
    if (this.registerForm.valid) this.http.post('http://localhost:8000/api/register', this.registerForm.value)
      .subscribe({
        next: (res) => {
          console.log('Usuario registrado:', res);
          this.router.navigate(['/inicio']); // 👈 Ruta a donde quieras llevarlo
        },
        error: (err) => console.error('Error al registrar:', err)
      });
    
  }
}
