import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonToggleModule
  ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      tipoUsuario: ['cliente', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      direccion: [''],
      provincia: [''],
      descripcion: ['']
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    const datos = this.registerForm.value;

    this.AuthService.register(datos).subscribe({
      next: (res) => {
        console.log('Registro exitoso', res);
      },
      error: (err) => {
        console.error('Error en el registro', err);
      }
    });

}
}
