import { Component } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  pokeList: Array<any> = [];

  constructor(private pokeService: PokeService) {
    pokeService.getList().subscribe((response: any) => {
      this.pokeList = response.results;
    });
  }
}
