import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [GridComponent, NavbarComponent, CardComponent],
  imports: [CommonModule],
  exports: [GridComponent],
})
export class PokeModule {}
