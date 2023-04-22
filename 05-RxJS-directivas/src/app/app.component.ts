import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rxjs-directivas';

  ngOnInit(): void {
    this.title = 'Componente eliminado';
    console.log(this.title);
  }

  ngOnDestroy(): void {
    this.title = 'Componente creado';
    console.log(this.title);
  }
}
