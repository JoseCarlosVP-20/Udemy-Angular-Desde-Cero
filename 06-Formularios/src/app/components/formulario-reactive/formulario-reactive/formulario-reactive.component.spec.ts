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
    const formulario = component.miFormulario;

    const proyecto = formulario.get('proyectoNombre');
    const horas = formulario.get('horas');
    const tecnologias = formulario.get('tecnologias');

    expect(proyecto).toBeTruthy();
    expect(horas).toBeTruthy();
    expect(tecnologias).toBeTruthy();
  });
});
