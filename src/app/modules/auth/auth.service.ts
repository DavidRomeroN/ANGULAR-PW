// src/app/modules/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/login';  // Cambia la URL si es diferente

  constructor(private http: HttpClient) {}

  login(credentials: { user: string; clave: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);  // Aquí la respuesta debería incluir el token
  }
}
