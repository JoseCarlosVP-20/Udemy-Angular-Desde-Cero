import { TemperatureValues } from '../enums/temperature.enum';
import { TemperaturePipe } from './temperature.pipe';

describe('TemperaturePipe', () => {
  it('create an instance', () => {
    const pipe = new TemperaturePipe();
    expect(pipe).toBeTruthy();
  });

  it('Debería retornar ºC si envío C', () => {
    const pipe = new TemperaturePipe();

    expect(pipe.transform(12, TemperatureValues.C)).toEqual('12.0 ºC');
  });
  it('Debería retornar ºF si envío F', () => {
    const pipe = new TemperaturePipe();

    expect(pipe.transform(12, TemperatureValues.F)).toEqual('53.6 ºF');
  });
});
