import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule], // Asegúrate de tener esto
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required], // Aquí cambiamos "contrasena" por "password"
    });
  }

  

  onSubmit() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:8000/api/login', this.loginForm.value)
        .subscribe({
          next: (res) => {
            console.log('Login exitoso:', res);
            // Guardar datos si quieres
            localStorage.setItem('usuario', JSON.stringify(res));
            // Redirigir al home
            this.router.navigate(['/inicio']); // o la ruta que tengas
          }
          ,
          error: (err) => {
            console.error('Error al iniciar sesión:', err);
          }
        });
    } else {
      console.warn('Formulario inválido');
    }
  }
}
