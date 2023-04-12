import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TareasService } from '../services/tareas.service';
import { GridComponent } from './grid/grid.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { SubtituloComponent } from './subtitulo/subtitulo.component';

@NgModule({
  declarations: [SubtituloComponent, ListadoTareasComponent, GridComponent],
  imports: [CommonModule],
  exports: [GridComponent],
  providers: [TareasService],
})
export class TareasModule {}
