import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  miIntervalo: Observable<number> = interval(3000);

  constructor() {}

  ngOnInit(): void {
    this.miIntervalo.subscribe((value) => console.log(value));
  }
}
