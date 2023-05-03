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

  it('Verificar campo tecnologias', () => {
    const tecnologias = component.tecnologias;
    const tecnologia = component.tecnologia;

    tecnologia?.setValue('Angular');
    component.agregarTecnologia();
    expect(tecnologias.value.length).toBe(1);

    tecnologia.setValue('React');
    component.agregarTecnologia();

    tecnologia.setValue('Node');
    component.agregarTecnologia();
    expect(tecnologias.value.length).toBe(3);

    expect(tecnologias.value).toEqual(['Angular', 'React', 'Node']);
  });

  it('Verificar agregar proyecto', () => {
    const formulario = component.miFormulario;
    const proyectoNombre = component.miFormulario.get('proyectoNombre');
    const horas = component.miFormulario.get('horas');
    const tecnologia = component.tecnologia;

    proyectoNombre?.setValue('Blog');
    horas?.setValue(10);

    tecnologia.setValue('Angular');
    component.agregarTecnologia();

    tecnologia.setValue('Node');
    component.agregarTecnologia();

    component.agregarProyecto();

    expect(component.proyectos.length).toBe(1);
  });
});
