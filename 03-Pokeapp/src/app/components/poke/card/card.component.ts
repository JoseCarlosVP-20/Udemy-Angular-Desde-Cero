import { Component, Input, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  info: any= [{name:''}];

  url: string = '';
  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    console.log(this.info);
    this.pokeService.getPokemon(this.info.name).subscribe((response: any) => {
      this.url = response.sprites.front_default;
      console.log(this.url);
    });
  }
}
