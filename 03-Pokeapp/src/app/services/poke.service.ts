import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = 'https://pokeapi.co/api/v2/';
  getList(page: number = 0) {
    return this.http.get(`${this.baseUrl}pokemon/?limit=10&offset=${page}`);
  }

  getPokemon(name: number) {
    return this.http.get(`${this.baseUrl}pokemon/${name}`);
  }
}
