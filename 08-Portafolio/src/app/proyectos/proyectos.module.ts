import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './proyectos.component';

@NgModule({
  declarations: [ProyectosComponent],
  imports: [CommonModule, ProyectosRoutingModule, RouterModule],
})
export class ProyectosModule {}
