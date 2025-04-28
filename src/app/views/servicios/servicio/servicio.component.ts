import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicioService } from './servicio.service';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // 🔥 Correcto

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule // ✅ lo dejamos en imports
  ],
  providers: [
    ServicioService // 👈 También lo declaramos aquí si quieres
  ]
})
export class ServicioComponent implements OnInit {
  servicioForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicioService: ServicioService,
    private http: HttpClient // 👈 Injectamos HttpClient si quieres directamente también
  ) {}

  ngOnInit(): void {
    this.servicioForm = this.fb.group({
      id_tipo: ['', Validators.required],
      nombre_servicio: ['', Validators.required],
      descripcion: [''],
      precio_base: ['', Validators.required],
      estado: ['Activo', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.servicioForm.valid) {
      this.servicioService.crearServicio(this.servicioForm.value)
        .subscribe({
          next: (response) => {
            console.log('Servicio guardado exitosamente', response);
            this.servicioForm.reset();
          },
          error: (error) => {
            console.error('Error al guardar servicio', error);
          }
        });
    }
  }
}
