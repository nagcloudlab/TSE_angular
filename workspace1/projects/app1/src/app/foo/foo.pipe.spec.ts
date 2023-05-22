import { FooPipe } from './foo.pipe';

describe('FooPipe', () => {
  it('create an instance', () => {
    const pipe = new FooPipe();
    expect(pipe).toBeTruthy();
  });
});
