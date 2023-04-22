import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, tipo: string) {
    return `${value} ºC ${tipo}`;
  }
}
