// src/app/modules/auth/login/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';  // Asegúrate de que esta línea esté correctamente importando el servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,  // Correcto: Inyectar el servicio aquí
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        localStorage.setItem('accessToken', response.token);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Login error:', err);
        alert('Usuario o contraseña incorrectos');
      }
    });
  }
}
