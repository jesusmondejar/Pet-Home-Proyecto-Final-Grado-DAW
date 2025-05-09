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

  crearMascota(mascota: Partial<Mascota>): Observable<Mascota> {
    return this.http.post<Mascota>(`${this.apiUrl}/mascotas`, mascota);
  }

  borrarMascota(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/mascotas/${id}`);
  }

  editarMascota(id: number, mascota: Partial<Mascota>): Observable<Mascota> {
    return this.http.put<Mascota>(`${this.apiUrl}/mascotas/${id}`, mascota);
  }
}



export interface Organizacion {
  id: number;
  nombre: string;
  email: string;
  contrasena: string;
  telefono: string;
  direccion: string;
  descripcion: string;
  fecha_registro: string;
  
}

export class OrganizacionService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  /** Listado completo */
  getOrganizaciones(): Observable<Organizacion[]> {
    return this.http.get<Organizacion[]>(`${this.apiUrl}/organizaciones`);
  }

  /** Filtrar por provincia */
  getOrganizacionesPorProvincia(provincia: string): Observable<Organizacion[]> {
    return this.http.get<Organizacion[]>(
      `${this.apiUrl}/organizaciones/provincia/${encodeURIComponent(provincia)}`
    );
  }
}


