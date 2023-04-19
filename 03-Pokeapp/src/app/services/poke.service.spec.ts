import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PokeService } from './poke.service';

describe('PokeService', () => {
  let service: PokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(PokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debería hacer petición http', (done: DoneFn) => {
    service.getList().subscribe((response) => {
      console.log(response);

      done();
    });
  });
});
