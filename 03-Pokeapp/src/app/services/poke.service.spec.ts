import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { pokeListMock } from '../mocks/pokeList.mock';
import { PokeService } from './poke.service';

describe('PokeService', () => {
  let service: PokeService;
  let httpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokeService],
    });

    httpClient = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokeService);
  });

  afterEach(() => {
    httpClient.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debería hacer petición http', (done: DoneFn) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8';

    service.getList().subscribe((response: any) => {
      expect(response).toEqual(pokeListMock);
      expect(response.results.length).toBe(8);

      done();
    });

    httpClient.expectOne(url).flush(pokeListMock);
  });
});
