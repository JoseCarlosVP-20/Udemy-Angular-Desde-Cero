import { Component } from '@angular/core';

@Component({
  selector: 'app-key-value',
  templateUrl: './key-value.component.html',
  styleUrls: ['./key-value.component.css'],
})
export class KeyValueComponent {
  persona = {
    nombre: 'José',
    edad: 21,
    ocupacion: 'Developer',
  };
}
