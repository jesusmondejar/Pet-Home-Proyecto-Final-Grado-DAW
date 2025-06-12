import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  raza?: string;
  edad?: number;
  tamanio?: string;
  descripcion?: string;
  estado?: string;
  protectora: any;
  imagenes: any[];
}

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(`${this.apiUrl}/mascotas`);
  }

  getMascotasPorEspecie(especie: string): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(`${this.apiUrl}/mascotas/especie/${especie}`);
  }

  getMascotasPorProtectora(id: number): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(`${this.apiUrl}/mascotas/protectora/${id}`);
  }

  crearMascota(mascota: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registermascotas`, mascota);
  }

  borrarMascota(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/deletemascotas/${id}`);
}

  editarMascota(id: number, mascota: any): Observable<any> {
    return this.http.post<Mascota>(`${this.apiUrl}/editmascotas/${id}`, mascota);
  }
}

export interface Organizacion {
  id: number;
  nombre: string;
  telefono: string;
  foto: string;
  // email: string;
  // contrasena: string;
  direccion: string;
  descripcion: string;
  // fecha_registro: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http2: HttpClient) {}

  /** Listado completo */
  getOrganizaciones(): Observable<Organizacion[]> {
    return this.http2.get<Organizacion[]>(`${this.apiUrl}/protectoras`);
  }

  /** Filtrar por provincia */
  getOrganizacionesPorProvincia(provincia: string): Observable<Organizacion[]> {
    return this.http2.get<Organizacion[]>(
      `${this.apiUrl}/protectoras/provincia/${encodeURIComponent(provincia)}`
    );
  }
}


