import { Component } from '@angular/core';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css'],
})
export class SliceComponent {
  frutas = ['manzana', 'pera', 'mango', 'sandia', 'uva'];

  letras = 'abcdefghi';
}
