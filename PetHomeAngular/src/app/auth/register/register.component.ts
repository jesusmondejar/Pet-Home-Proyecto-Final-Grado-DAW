import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonToggleModule],
  templateUrl: './register.component.html',
  styles: `
    /* Tus estilos existentes se mantienen igual */
    .form { ... }
    .title { ... }
    /* ... resto de tus estilos ... */
  `
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      telefono: ['', Validators.pattern('[0-9]{9,15}')],
      direccion: [''],
      tipoUsuario: ['cliente', Validators.required],
      provincia: [''],
      descripcion: ['']
    });

    this.setupConditionalValidation();
  }

  private setupConditionalValidation(): void {
    this.registerForm.get('tipoUsuario')?.valueChanges.subscribe(value => {
      const provincia = this.registerForm.get('provincia');
      const direccion = this.registerForm.get('direccion');
      const descripcion = this.registerForm.get('descripcion');

      if (value === 'protectora') {
        provincia?.setValidators([Validators.required]);
        direccion?.setValidators([Validators.required]);
        descripcion?.setValidators([Validators.required]);
      } else {
        provincia?.clearValidators();
        direccion?.clearValidators();
        descripcion?.clearValidators();
      }

      provincia?.updateValueAndValidity();
      direccion?.updateValueAndValidity();
      descripcion?.updateValueAndValidity();
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      const isProtectora = formData.tipoUsuario === 'protectora';

      const dataToSend = {
        nombre: formData.nombre,
        email: formData.email,
        contrasena: formData.contrasena,
        telefono: formData.telefono,
        tipoUsuario: formData.tipoUsuario
      };


      this.http.post('/api/register', dataToSend).subscribe({
        next: (res: any) => {
          console.log('Registro exitoso:', res);
          this.handleRegistrationSuccess(res, isProtectora);
        },
        error: (err) => {
          console.error('Error al registrar:', err);
          this.handleRegistrationError(err);
        }
      });
    }
  }

  private handleRegistrationSuccess(response: any, isProtectora: boolean): void {
    if (response.redirect) {
      this.router.navigate([response.redirect]);
    } else {
      // Redirección por defecto según tipo de usuario
      const redirectPath = isProtectora ? '/protectora/dashboard' : '/cliente/dashboard';
      this.router.navigate([redirectPath]);
    }
  }

  private handleRegistrationError(error: any): void {
    if (error.status === 409) {
      alert('El email ya está registrado');
    } else if (error.status === 0) {
      alert('Error de conexión con el servidor. Verifica que el backend esté funcionando.');
    } else {
      alert('Error en el registro. Por favor, inténtalo de nuevo.');
    }
  }

  get esProtectora(): boolean {
    return this.registerForm.get('tipoUsuario')?.value === 'protectora';
  }
}