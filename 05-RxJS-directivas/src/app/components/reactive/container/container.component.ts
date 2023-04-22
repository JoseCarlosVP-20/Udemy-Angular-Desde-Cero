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
        observer.next(numero)
      }, 1000);
    });

    miObservable.subscribe((result)=>{
      console.log(result);
    });
  }
}
