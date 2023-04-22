import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
  selector: 'app-custom-container',
  templateUrl: './custom-container.component.html',
  styleUrls: ['./custom-container.component.css'],
})
export class CustomContainerComponent {
  grados:number = 12;
  constructor(private darkModeServices: DarkModeService) {}

  get dark() {
    return this.darkModeServices.dark;
  }

  changeMode() {
    this.darkModeServices.changeMode();
  }
}
