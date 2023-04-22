import { DarkModePipe } from './dark-mode.pipe';

describe('DarModePipe', () => {
  it('Debería retornar DarkMode si mando true', () => {
    const pipe = new DarkModePipe();

    expect(pipe.transform(true)).toEqual('bg-dark text-white');
  });
  it('Debería retornar LightMode si mando false', () => {
    const pipe = new DarkModePipe();

    expect(pipe.transform(false)).toEqual('bg-light text-dark');
  });
});
