import { TareasService } from './tareas.service';

describe('TareaService', () => {
  let service: TareasService;

  beforeEach(() => {
    service = new TareasService();
  });

  it('ToBe: debería verificar que mi servicio inicie en 4 tareas', () => {
    expect(service.tareas.length).toBe(4);
  });

  it('Delete: debería borrar una tarea Barrer', () => {
    service.deleteTarea('Barrer');

    expect(service.tareas.length).toBe(3);
  });

  it('No Delete: No debería borrar una tarea que no existe', () => {
    service.deleteTarea('abcd');

    expect(service.tareas.length).toBe(4);
  });

  it('Spy: debería llamar la función completar una sola vez', () => {
    const espia = jasmine.createSpyObj('TareasService', ['completeTarea']);

    espia.completeTarea();

    expect(espia.completeTarea.calls.count()).toBe(1);
  });
});
