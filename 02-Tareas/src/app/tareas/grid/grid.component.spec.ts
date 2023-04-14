import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasService } from 'src/app/services/tareas.service';
import { ListadoTareasComponent } from '../listado-tareas/listado-tareas.component';
import { SubtituloComponent } from '../subtitulo/subtitulo.component';
import { GridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridComponent, SubtituloComponent, ListadoTareasComponent],
      providers: [TareasService],
    }).compileComponents();

    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
