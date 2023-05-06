import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activatedRouter: ActivatedRoute,
    private proyectoDataService: ProyectosService,
    private router: Router
  ) {
    let nombre = '';
    activatedRouter.params.subscribe(({ nombre: nombreProyecto }) => {
      nombre = nombreProyecto;
    });
    this.parametro = decodeURI(nombre);
  }
  ngOnInit(): void {
    this.proyectoData = this.proyectoDataService.getproyectos(this.parametro);
  }

  goProyectos() {
    this.router.navigate(['/proyectos']);
  }
}
