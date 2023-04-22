import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, tipo?: string) {
    let finalValue = value;
    if (tipo == 'F') {
      finalValue = value * (9 / 5) + 32;
    }
    return `${finalValue.toPrecision(3)} º${tipo}`;
  }
}
