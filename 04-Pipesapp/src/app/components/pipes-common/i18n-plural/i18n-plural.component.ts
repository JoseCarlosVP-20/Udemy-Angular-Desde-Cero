import { Component } from '@angular/core';

@Component({
  selector: 'app-i18n-plural',
  templateUrl: './i18n-plural.component.html',
  styleUrls: ['./i18n-plural.component.css'],
})
export class I18nPluralComponent {
  notificaciones = 0;

  mensaje = {
    '=0': 'No tienes notificaciones',
    '=1': 'Tienes una notificación',
    other: 'Tienes # notificaciones',
  };

  addNotificacion() {
    this.notificaciones++;
  }
}
