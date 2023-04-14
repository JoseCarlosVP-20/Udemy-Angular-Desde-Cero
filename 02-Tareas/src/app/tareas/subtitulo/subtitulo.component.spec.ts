import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasService } from 'src/app/services/tareas.service';
import { SubtituloComponent } from './subtitulo.component';

describe('SubtituloComponent', () => {
  let component: SubtituloComponent;
  let fixture: ComponentFixture<SubtituloComponent>;
  let service: TareasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubtituloComponent],
      providers: [TareasService],
    }).compileComponents();

    service = TestBed.inject(TareasService);
    fixture = TestBed.createComponent(SubtituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería renderizar 4 elementos', () => {
    const render = (HTMLElement = fixture.nativeElement);

    const tareas = render.querySelector('#tareas').textContent.trim();

    expect(tareas).toEqual('Número de tareas: 4');
  });

  it('Debería disminuir en 1 si elimino un elemento', () => {
    service.deleteTarea('Barrer');
    fixture.detectChanges();

    const render: HTMLElement = fixture.nativeElement;
    const tareas = render.querySelector('#tareas')?.textContent?.trim();

    expect(tareas).toEqual('Número de tareas: 3');
  });

  it('Debería renderizar el mensaje "No hay tareas en la lista"', () => {
    service.deleteTarea('Barrer');
    service.deleteTarea('Leer');
    service.deleteTarea('Trapear');
    service.deleteTarea('Cocinar');
    fixture.detectChanges();

    const render: HTMLElement = fixture.nativeElement;
    const tareas = render.querySelector('#no-tareas')?.textContent?.trim();

    expect(tareas).toEqual('No hay tareas en la lista');
  });
});
