import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContainerComponent } from './container/container.component';
import { TextoComponent } from './texto/texto.component';
import { NumeroComponent } from './numero/numero.component';
import { FechaComponent } from './fecha/fecha.component';

@NgModule({
  declarations: [ContainerComponent, TextoComponent, NumeroComponent, FechaComponent],
  imports: [CommonModule],
  exports: [ContainerComponent],
})
export class PipesCommonModule {}
