import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  // Estado reactivo de login
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  loggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient) {}

  private hasToken(): boolean {
    return !!localStorage.getItem('tipo'); // Comprueba si hay tipo guardado
  }

  // Actualiza el estado de login
  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
  }

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post<{ message: string; tipoUsuario: string }>(`${this.apiUrl}/login`, data, { withCredentials: true }).pipe(
      tap(res => {
        if (res && res.tipoUsuario) {
          localStorage.setItem('tipo', res.tipoUsuario);
          this.setLoggedIn(true);
        }
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true }).pipe(
      tap(() => {
        localStorage.removeItem('tipo');
        this.setLoggedIn(false);
      })
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data, { withCredentials: true });
  }

  getTipoUsuario(): string | null {
    return localStorage.getItem('tipo'); // "protectora" o "cliente"
  }

  esOrganizacion(): boolean {
    return this.getTipoUsuario() === 'protectora';
  }
}
