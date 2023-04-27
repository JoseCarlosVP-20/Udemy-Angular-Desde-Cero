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

  tecnologias: Array<string> = [];

  agregar() {
    console.log(this.miFormulario.value);
  }

  agregarTec() {
    this.tecnologias.push(this.miFormulario.controls['tecnologia'].value);
    console.log(this.tecnologias);
  }
}
