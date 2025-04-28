import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // 🚨 IMPORTANTE

@NgModule({
  declarations: [
    // Tus componentes aquí (si hay)
  ],
  imports: [
    BrowserModule,
    HttpClientModule // 🚨 Agrega HttpClientModule aquí
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
