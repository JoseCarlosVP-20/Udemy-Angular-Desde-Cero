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

  tecnologia: FormControl = this.fb.control('Angular', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(25),
  ]);

  constructor(private fb: FormBuilder) {}

  get tecnologias() {
    return this.miFormulario.get('tecnologias') as FormArray;
  }
  validar() {
    return this.miFormulario.invalid && this.miFormulario.touched;
  }

  agregarTecnologia() {
    if (this.tecnologia.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.tecnologias.push(this.tecnologia);
    console.log('agregado');
  }
}
