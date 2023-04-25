import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { ContainerComponent } from '../components/reactive/container/container.component';
import { BtnDirective } from './btn.directive';

describe('BtnDirective', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let buttonElement: HTMLButtonElement;

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [AppComponent, BtnDirective, ContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.debugElement.query(
      By.directive(BtnDirective)
    ).nativeElement;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('Debería crear un botón con un color RED con fondo RED, color del texto SNOW, tamaño del 100%', () => {
    expect(buttonElement.style.backgroundColor).toBe('purple');
    expect(buttonElement.style.color).toBe('snow');
    expect(buttonElement.style.width).toBe('100%');
  });

  it('Debería tener el WIDTH en 100%', () => {
    expect(buttonElement.style.width).toBe('100%');
  });

  it('Debería tener el PADDING en .3rem', () => {
    expect(buttonElement.style.padding).toBe('0.3rem');
  });
});
