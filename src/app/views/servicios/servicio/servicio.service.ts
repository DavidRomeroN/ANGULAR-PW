import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private apiUrl = 'http://localhost:8080/api/servicios'; // Cambia esta URL según tu backend

  constructor(private http: HttpClient) { }

  // Obtener todos los servicios
  getServicios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Obtener un servicio por ID
  getServicio(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo servicio
  crearServicio(servicio: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, servicio);
  }

  // Actualizar un servicio
  actualizarServicio(id: number, servicio: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, servicio);
  }

  // Eliminar un servicio
  eliminarServicio(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
