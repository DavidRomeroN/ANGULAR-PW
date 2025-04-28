import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {ServicioComponent} from "./servicio/servicio.component";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ServicioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ServiciosModule { }
