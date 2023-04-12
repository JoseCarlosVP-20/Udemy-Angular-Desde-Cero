import { Component } from '@angular/core';
import { Tarea } from 'src/app/interfaces/Tareas';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css'],
})
export class ListadoTareasComponent {
  constructor(private tareasService: TareasService) {}

  get tareas() {
    return this.tareasService.tareas;
  }

  delete(tarea: Tarea) {
    this.tareasService.deleteTarea(tarea.tarea);
  }

  completarTarea(tarea: Tarea) {
    this.tareasService.completeTarea(tarea.tarea);
  }
}
