import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/Tareas';

@Injectable()
export class TareasService {
  tareas: Array<Tarea> = [
    { tarea: 'Barrer', completado: false },
    { tarea: 'Trapear', completado: true },
    { tarea: 'Cocinar', completado: false },
    { tarea: 'Leer', completado: false },
  ];

  deleteTarea(nombreTarea: string) {
    this.tareas = this.tareas.filter((tarea) => tarea.tarea !== nombreTarea);
  }
}
