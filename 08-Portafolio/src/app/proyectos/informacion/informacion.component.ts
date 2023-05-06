import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService } from '../service/proyectos.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
})
export class InformacionComponent implements OnInit {
  parametro: string = '';
  proyectoData: any = {};

  constructor(
    private router: ActivatedRoute,
    private proyectoDataService: ProyectosService
  ) {
    let nombre = '';
    router.params.subscribe(({ nombre: nombreProyecto }) => {
      nombre = nombreProyecto;
    });
    this.parametro = decodeURI(nombre);
  }
  ngOnInit(): void {
    this.proyectoData = this.proyectoDataService.getproyectos(this.parametro);
  }
}
