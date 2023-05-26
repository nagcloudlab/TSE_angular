import { UppercasePipe } from './uppercase.pipe';

describe('UppercasePipe', () => {

  let pipe: UppercasePipe
  beforeEach(() => {
    pipe = new UppercasePipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('foo ==> FOO', () => {
    expect("FOO").toEqual(pipe.transform("foo"));
  });

});
