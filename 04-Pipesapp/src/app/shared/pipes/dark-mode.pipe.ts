import { PipeTransform } from '@angular/core';

@Pipe({ name: 'darkMode' })
export class DarkModePipe implements PipeTransform {
  transform() {
    return 'Dark Mode desde pipe';
  }
}
