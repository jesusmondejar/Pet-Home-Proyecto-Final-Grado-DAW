import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    HttpClientModule,
    MatButtonToggleModule
  ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private router: Router
  ) { }

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

  const formData = new FormData();

  // Añadimos todos los campos del formulario
  Object.entries(this.registerForm.value).forEach(([key, value]) => {
    formData.append(key, value as string);
  });

  // Si el usuario seleccionó imagen, la añadimos
  if (this.imagenFile) {
    formData.append('imagen', this.imagenFile);
  }

  this.AuthService.register(formData).subscribe({
    next: (res) => {
      console.log('Registro exitoso', res);
      this.router.navigate(['/inicio']);
    },
    error: (err) => {
      console.error('Error en el registro', err);
    }
  });
}


  isInvalid(controlName: string): boolean {
    const control = this.registerForm.get(controlName);
    return !!(control && control.invalid && control.touched);
  }


  imagenFile: File | null = null;
  imagenError: boolean = false;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.imagenFile = null;
      return;
    }

    const file = input.files[0];
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];

    if (!allowedTypes.includes(file.type)) {
      this.imagenError = true;
      this.imagenFile = null;
    } else {
      this.imagenError = false;
      this.imagenFile = file;
    }
  }


}
