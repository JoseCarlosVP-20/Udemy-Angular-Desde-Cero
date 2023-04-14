import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TareasService } from './services/tareas.service';
import { GridComponent } from './tareas/grid/grid.component';
import { ListadoTareasComponent } from './tareas/listado-tareas/listado-tareas.component';
import { SubtituloComponent } from './tareas/subtitulo/subtitulo.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GridComponent,
        SubtituloComponent,
        ListadoTareasComponent,
      ],
      providers: [TareasService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
