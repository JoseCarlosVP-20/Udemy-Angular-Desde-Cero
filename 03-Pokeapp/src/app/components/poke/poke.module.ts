import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [GridComponent, NavbarComponent, CardComponent],
  imports: [CommonModule, MatToolbarModule, MatGridListModule],
  exports: [GridComponent],
})
export class PokeModule {}
