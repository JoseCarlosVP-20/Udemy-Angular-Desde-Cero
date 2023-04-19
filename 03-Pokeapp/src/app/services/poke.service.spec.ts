import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
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
    service.getList().subscribe((response) => {
      console.log(response);

      expect(1).toBe(1);
      done();
    });

    const req: TestRequest = httpClient.expectOne(
      'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8'
    );

    expect(req.request.url).toEqual(service.url);
    expect(req.request.urlWithParams).toEqual(
      'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8'
    );
    expect(req.request.method).toEqual('GET');

    req.flush(pokeListMock);
  });
});
