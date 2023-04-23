import { Component, OnInit } from '@angular/core';
import { Observable, filter, interval, take } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  miIntervalo: Observable<number> = interval(3000);

  constructor() {}

  ngOnInit(): void {
    this.miIntervalo
      .pipe(
        filter((value) => value % 2 === 0),
        take(4))
      .subscribe((value) => console.log(value));
  }
}
