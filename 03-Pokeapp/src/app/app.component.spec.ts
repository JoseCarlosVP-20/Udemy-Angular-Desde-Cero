import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PokeModule } from './components/poke/poke.module';
import { PokeService } from './services/poke.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [PokeModule],
      providers: [PokeService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
