import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormularioTemplateModule } from './components/formulario-template/formulario-template.module';
import { FormularioReactiveModule } from './components/formulario-reactive/formulario-reactive.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[FormularioTemplateModule, FormularioReactiveModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'formularios'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('formularios');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('formularios app is running!');
  });
});
