import { FormBuilder } from '@angular/forms';
import { FormularioReactiveComponent } from './formulario-reactive.component';

describe('FormularioReactiveComponent', () => {
  let component: FormularioReactiveComponent;

  beforeEach(async () => {
    component = new FormularioReactiveComponent(new FormBuilder());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería crear un formulario con 3 inputs: -Proyecto, -Horas, -Tecnologías', () => {
    const { proyectoNombre, horas, tecnologias } = component.miFormulario.value;

    expect(proyectoNombre).toBeDefined();
    expect(horas).toBeDefined();
    expect(tecnologias).toBeDefined();
  });

  it('Verificar que el campo Proyecto Nombre acepte mínimo 3 caracteres', () => {
    const proyectoNombre = component.miFormulario.get('proyectoNombre');

    proyectoNombre?.setValue('acb');
    expect(proyectoNombre?.valid).toBeTruthy();
  });

  it('Verificar que el campo Proyecto Nombre acepte máximo 15 caracteres', () => {
    const proyectoNombre = component.miFormulario.get('proyectoNombre');

    proyectoNombre?.setValue('acb');
    expect(proyectoNombre?.valid).toBeTruthy();
  });

  it('Verificar campo horas', () => {
    const horas = component.miFormulario.get('horas');

    expect(horas?.valid).toBeTruthy();

    horas?.setValue(0);
    expect(horas?.invalid).toBeTruthy();

    horas?.setValue(51);
    expect(horas?.invalid).toBeTruthy();

    horas?.setValue('51');
    expect(horas?.invalid).toBeTruthy();
  });
});
