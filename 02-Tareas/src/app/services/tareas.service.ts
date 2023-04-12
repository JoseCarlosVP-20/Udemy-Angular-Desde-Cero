import { Injectable } from '@angular/core';

@Injectable()
export class TareasService {
  tareas: Array<string> = ['Barrer', 'Trapear', 'Cocinar', 'Leer'];

  deleteTarea() {
    this.tareas.pop();
  }

  getTareas(){
    return this.tareas;
  }
}
