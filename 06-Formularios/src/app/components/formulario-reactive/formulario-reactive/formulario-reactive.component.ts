import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css'],
})
export class FormularioReactiveComponent {
  miFormulario: FormGroup = this.fb.group({
    proyectoNombre: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    horas: this.fb.control(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(50),
    ]),
    tecnologias: this.fb.array([]),
  });

  tecnologia: FormControl = this.fb.control('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(25),
  ]);

  get tecnologias() {
    return this.miFormulario.get('tecnologias') as FormArray;
  }

  proyectos:any[]=[];

  constructor(private fb: FormBuilder) {}

  validar() {
    return this.miFormulario.invalid && this.miFormulario.touched;
  }

  agregarTecnologia() {
    if (this.tecnologia.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.tecnologias.push(this.fb.control(this.tecnologia.value));
    this.tecnologia.reset();
  }
  agregarProyecto() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.proyectos.push(this.miFormulario.value);
    console.log(this.proyectos);
    this.miFormulario.reset();
    this.tecnologias.clear();
  }
}
