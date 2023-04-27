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
    proyecto: '',
    horas: 0,
    tecnologia: '',
  };
  tecnologias: Array<string> = [];

  agregar() {
    console.log(this.miFormulario.value);
  }

  agregarTec() {
    if (this.miFormulario.controls['tecnologia'].invalid) {
      return;
    }
    this.tecnologias.push(this.miFormulario.controls['tecnologia'].value);

    this.miFormulario.resetForm({
      ...this.miFormulario.value,
      tecnologia: '',
    });

    console.log(this.tecnologias);
  }
}
