import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  constructor() {
    let numero = 0;

    const miObservable = new Observable<number>((observer) => {
      setInterval(() => {
        numero++;
        observer.next(numero);

        observer.complete();

        if (numero == 3) observer.error('Número erroneo');
      }, 1000);
    });

    miObservable.subscribe(
      // LEGACY
      // (result) => {
      //   console.log(result);
      // },
      // (error) => {
      //   console.error(error);
      // },
      // () => {
      //   console.log('Observable Completado');
      // }

      {
        next: (result) => {
          console.log(result);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.log('Completado');
        },
      }
    );
  }
}
