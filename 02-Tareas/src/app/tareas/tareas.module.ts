import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { SubtituloComponent } from './subtitulo/subtitulo.component';

@NgModule({
  declarations: [SubtituloComponent, ListadoTareasComponent],
  imports: [CommonModule],
  exports: [SubtituloComponent, ListadoTareasComponent],
})
export class TareasModule {}
