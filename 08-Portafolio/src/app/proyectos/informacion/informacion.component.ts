import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
})
export class InformacionComponent {
  parametro: string = '';
  constructor(private router: ActivatedRoute) {
    let nombre = '';
    router.params.subscribe(({ nombre: nombreProyecto }) => {
      nombre = nombreProyecto;
    });
    this.parametro = decodeURI(nombre);
  }
}
