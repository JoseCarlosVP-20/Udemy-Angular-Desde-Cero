import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DarkModePipe } from 'src/app/shared/pipes/dark-mode.pipe';
import { CustomContainerComponent } from './custom-container/custom-container.component';

@NgModule({
  declarations: [CustomContainerComponent, DarkModePipe],
  imports: [CommonModule],
  exports: [CustomContainerComponent, DarkModePipe],
})
export class PipesCustomModule {}
