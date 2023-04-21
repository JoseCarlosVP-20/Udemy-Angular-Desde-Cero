import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  dark: boolean = true;
  constructor() {}

  changeMode() {
    this.dark = !this.dark;
  }
}
