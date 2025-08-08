import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Estudiante } from './services/estudiante';

@Component({
  selector: 'app-root',
  // standalone: true, esto no venia
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  estudiantes = inject(Estudiante);
  estudiante: any[] = [];

  constructor() {
    this.estudiantes.getEstudiantes().subscribe(datos => {
      this.estudiante = datos;
    })
  }
}
