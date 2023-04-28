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
  proyecto: any[] = [];
  tecnologias: Array<string> = [];

  agregar() {
    if (this.miFormulario.invalid) {
      return;
    }
    this.proyecto.push({
      proyecto: this.miFormulario.controls['proyecto'].value,
      horas: this.miFormulario.controls['horas'].value,
      tecnologia: this.tecnologias,
    });

    this.miFormulario.resetForm();
    this.tecnologias = [];

    console.log(this.proyecto);
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
  }
}
