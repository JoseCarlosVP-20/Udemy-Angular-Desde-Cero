import { Component } from '@angular/core';
import { ProyectosService } from './service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent {
  constructor(private proyectosServices: ProyectosService) {}
  get data() {
    return this.proyectosServices.data;
  }
}
