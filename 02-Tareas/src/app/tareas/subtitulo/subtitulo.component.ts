import { Component } from '@angular/core';
import { Tarea } from 'src/app/interfaces/Tareas';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-subtitulo',
  templateUrl: './subtitulo.component.html',
  styleUrls: ['./subtitulo.component.css'],
})
export class SubtituloComponent {
  constructor(private tareaService: TareasService) {}

  get tareas() {
    return this.tareaService.tareas.length;
   
  }


}
