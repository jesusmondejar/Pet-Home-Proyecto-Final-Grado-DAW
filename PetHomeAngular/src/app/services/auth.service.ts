import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api'; // Asegúrate de que la URL sea correcta

  constructor(private http: HttpClient) { }

  // Registro de usuario
  register(nombre: string, email: string, contrasena: string, telefono: string, direccion: string): Observable<any> {
    const body = { nombre, email, contrasena, telefono, direccion };
    return this.http.post(`${this.apiUrl}/register`, body);
  }

  // Login de usuario
  login(email: string, contrasena: string): Observable<any> {
    const body = { email, password: contrasena };
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  // Guardar el token JWT en el localStorage
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Obtener el token JWT
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Eliminar el token (cuando el usuario cierre sesión)
  removeToken(): void {
    localStorage.removeItem('token');
  }
}
