import { NameInitialsPipe } from "./name-initials.pipe";


describe('NameInitialPipe', () => {
  it('create an instance', () => {
    const pipe = new NameInitialsPipe();
    expect(pipe).toBeTruthy();
  });
});
