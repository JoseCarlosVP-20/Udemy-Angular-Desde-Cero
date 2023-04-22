import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsyncComponent } from './async/async.component';
import { ContainerComponent } from './container/container.component';
import { FechaComponent } from './fecha/fecha.component';
import { I18nPluralComponent } from './i18n-plural/i18n-plural.component';
import { I18nSelectComponent } from './i18n-select/i18n-select.component';
import { JsonComponent } from './json/json.component';
import { KeyValueComponent } from './key-value/key-value.component';
import { NumeroComponent } from './numero/numero.component';
import { SliceComponent } from './slice/slice.component';
import { TextoComponent } from './texto/texto.component';

@NgModule({
  declarations: [
    ContainerComponent,
    TextoComponent,
    NumeroComponent,
    FechaComponent,
    JsonComponent,
    KeyValueComponent,
    SliceComponent,
    I18nPluralComponent,
    I18nSelectComponent,
    AsyncComponent,
  ],
  imports: [CommonModule],
  exports: [ContainerComponent],
})
export class PipesCommonModule {}
