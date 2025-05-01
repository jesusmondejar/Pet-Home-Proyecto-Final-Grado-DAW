import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, // Marca como standalone
  imports: [ReactiveFormsModule, CommonModule], // Importa los módulos necesarios
  templateUrl: './login.component.html',
  template: `
    <div class="auth-container">
      <h2>Iniciar Sesión</h2>
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <input type="email" formControlName="email" placeholder="Correo electrónico">
        <input type="password" formControlName="password" placeholder="Contraseña">
        <button type="submit">Entrar</button>
      </form>
    </div>
  `,
  styles: [`
    .auth-container {
      /* Tus estilos aquí */
    }
    /* Estilos para validación */
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login data', this.loginForm.value);
      // Lógica para enviar datos al backend
    }
  }
}