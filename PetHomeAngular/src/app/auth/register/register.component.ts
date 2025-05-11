// register.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, MatButtonToggleModule, NgIf], // 👈 AÑADE ESTO
  templateUrl: './register.component.html',
  styles: `

.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 420px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  
  .title {
    font-size: 28px;
    color: #fc713e;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }
  
  .title::before,.title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color:#fc713e;
  }
  
  .title::before {
    width: 18px;
    height: 18px;
    background-color:#fc713e;
  }
  
  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }
  
  .message, .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }
  
  .signin {
    text-align: center;
  }
  
  .signin a {
    color: #fc713e;
  }
  
  .signin a:hover {
    text-decoration: underline#fc713e;
  }
  
  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }
  
  .form label {
    position: relative;
  }
  
  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }
  
  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }
  
  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }
  
  .form label .input:focus + span,.form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }
  
  .form label .input:valid + span {
    color: #fc713e;
  }
  
  .submit {
    border: none;
    outline: none;
    background-color: #fc713e;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
  }
  
  .submit:hover {
    background-color:rgb(255, 134, 48);
  }

  /* Centrar el formulario en toda la pantalla */
html, body {
    height: 100%;
    margin: 0;
  }
  
  .center-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-top: 20px;    /* espacio suficiente para separar del navbar */
  box-sizing: border-box;
  }
  
  ::ng-deep .user-toggle {
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  width: 100%;
  background-color: #fff;
  font-weight: 500;
}

::ng-deep .user-toggle .mat-button-toggle {
  flex: 1;
  text-transform: none;
  font-size: 14px;
  color: #555;
  padding: 10px 0;
  transition: all 0.3s ease;
  border-right: 1px solid rgba(105, 105, 105, 0.1);
}

::ng-deep .user-toggle .mat-button-toggle:last-child {
  border-right: none;
}

::ng-deep .user-toggle .mat-button-toggle-checked {
  background-color: #fc713e;
  color: white;
}

::ng-deep .user-toggle .mat-button-toggle:not(.mat-button-toggle-checked):hover {
  background-color: rgba(252, 113, 62, 0.1);
  color: #fc713e;
}

  
  
  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }
  
    to {
      transform: scale(1.8);
      opacity: 0;
    }
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
      tipoUsuario: ['cliente', Validators.required],
      provincia: [''],
      dni: [''],
      descripcion: ['']
    });

    this.registerForm.get('tipoUsuario')?.valueChanges.subscribe(value => {
      const provincia = this.registerForm.get('provincia');
      const dni = this.registerForm.get('dni');
      const descripcion = this.registerForm.get('descripcion');

      if (value === 'protectora') {
        provincia?.setValidators([Validators.required]);
        dni?.setValidators([Validators.required]);
        descripcion?.setValidators([Validators.required]);
      } else {
        provincia?.clearValidators();
        dni?.clearValidators();
        descripcion?.clearValidators();
      }

      provincia?.updateValueAndValidity();
      dni?.updateValueAndValidity();
      descripcion?.updateValueAndValidity();
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

  get esProtectora(): boolean {
    return this.registerForm.get('tipoUsuario')?.value === 'protectora';
  }

}
