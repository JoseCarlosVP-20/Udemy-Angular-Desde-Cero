import { Component } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  pokeList: Array<any> = [];

  private page: number = 0;

  constructor(private pokeService: PokeService) {
    pokeService.getList().subscribe((response: any) => {
      this.pokeList = response.results;
    });
  }

  nextPage() {
    this.page += 10;

    this.pokeService.getList(this.page).subscribe((response: any) => {
      this.pokeList = response.results;
    });
  }
  prevPage() {
    this.page -= 10;

    this.pokeService.getList(this.page).subscribe((response: any) => {
      this.pokeList = response.results;
    });
  }
}
