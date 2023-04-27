import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css'],
})
export class FormularioTemplateComponent {
  @ViewChild('miFormulario')
  miFormulario!: NgForm;

  initialState = {
    proyecto: 'Hola mundo',
    horas: 0,
    tecnologia: '',
  };
  tecnologias: Array<string> = [];

  agregar() {
    console.log(this.miFormulario.value);
  }

  agregarTec() {
    if (this.miFormulario.invalid && this.miFormulario.touched) {
      return;
    }
    this.tecnologias.push(this.miFormulario.controls['tecnologia'].value);
    console.log(this.tecnologias);
  }
}
