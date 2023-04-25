import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerComponent } from '../container/container.component';
import { AreaMouseDirective } from './area-mouse.directive';

describe('AreaMouseDirective', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;
  let divElement: HTMLDivElement;

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [ContainerComponent, AreaMouseDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('Debería crear un div con un color de fondo BLUE, tamaño del 300px', () => {
    divElement = fixture.debugElement.nativeElement.querySelector('div');
    expect(divElement.style.backgroundColor).toBe('blue');
    expect(divElement.style.height).toBe('300px');
  });
});
