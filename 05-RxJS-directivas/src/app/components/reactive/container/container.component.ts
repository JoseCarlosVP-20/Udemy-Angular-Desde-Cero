import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit, OnDestroy {
  // miIntervalo: Observable<number> = interval(1000).pipe(
  //   map((value) => value + 1),
  //   filter((value) => value % 2 === 0),
  //   take(5)
  // );

  // miSubscription: Subscription | null = null;

  // constructor() {}

  // ngOnInit(): void {
  //   this.miSubscription = this.miIntervalo.subscribe({
  //     next: (value) => console.log(value),
  //     complete: () => console.log('Estos son los primeros 5 números pares'),
  //   });
  // }
  // ngOnDestroy(): void {
  //   this.miSubscription!.unsubscribe();
  //   console.log('Componente destruido');
  // }

  subscriptor: Subscription | null = null;
  y: number = 0;
  x: number = 0;

  ngOnInit() {
    const obs = fromEvent<MouseEvent>(
      document.querySelector('#area')!,
      'mousemove'
    );

    this.subscriptor = obs.subscribe((ev) => {
      this.x = ev.clientX;
      this.y = ev.clientY;
    });
  }
  ngOnDestroy(): void {
    this.subscriptor?.unsubscribe();
  }
}
