import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService,  private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
  if (this.loginForm.invalid) return;

  this.authService.login(this.loginForm.value).subscribe({
    next: (res) => {
      this.successMessage = 'Login correcto';
      this.errorMessage = '';
      this.router.navigate(['/inicio']);  // <--- redirige a /inicio aquí
    },
    error: (err) => {
      this.errorMessage = err.error.error || 'Error en login';
      this.successMessage = '';
    }
  });
}

  logout() {
    this.authService.logout().subscribe(() => {
      this.successMessage = 'Logout exitoso';
      this.errorMessage = '';
      // Limpia estados o redirige después de logout
    });
  }
}
