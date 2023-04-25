import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { ContainerComponent } from '../components/reactive/container/container.component';
import { ThemeDirective } from './theme.directive';

describe('ThemeDirective', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [AppComponent, ThemeDirective, ContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('Debe crear un DIV con el backgroundColor #333 y el color del texto Snow', () => {
    const element: HTMLDivElement = fixture.debugElement.query(
      By.directive(ThemeDirective)
    ).nativeElement;

    expect(element.style.backgroundColor).toBe('rgb(51, 51, 51)');
    expect(element.style.color).toBe('snow');
  });
});
