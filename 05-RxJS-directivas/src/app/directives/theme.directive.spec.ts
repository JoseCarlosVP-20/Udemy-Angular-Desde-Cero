import { ComponentFixture, TestBed } from '@angular/core/testing';
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
});
