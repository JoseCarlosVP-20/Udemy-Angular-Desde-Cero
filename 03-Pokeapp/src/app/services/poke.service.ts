import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeData } from '../interfaces/PokeData.interface';
import { PokeList } from '../interfaces/PokeList.interface';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = 'https://pokeapi.co/api/v2/';

  get url() {
    return this.baseUrl + 'pokemon/';
  }

  getList(page: number = 0) {
    return this.http.get<PokeList>(`${this.baseUrl}pokemon/`, {
      params: {
        offset: page,
        limit: 8,
      },
    });
  }

  getPokemon(name: number) {
    return this.http.get<PokeData>(`${this.baseUrl}pokemon/${name}`);
  }
}
