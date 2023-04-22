import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesCommonModule } from './components/pipes-common/pipes-common.module';
import { PipesCustomModule } from './components/pipes-custom/pipes-custom.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PipesCommonModule, PipesCustomModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
