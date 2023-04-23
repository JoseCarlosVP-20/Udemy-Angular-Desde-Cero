import { Component, OnInit } from '@angular/core';
import { Observable, filter, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  miIntervalo: Observable<number> = interval(1000).pipe(
    map((value) => value + 1),
    filter((value) => value % 2 === 0),
    take(5)
  );

  constructor() {}

  ngOnInit(): void {
    this.miIntervalo.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Estos son los primeros 5 números pares'),
    });
  }
}
