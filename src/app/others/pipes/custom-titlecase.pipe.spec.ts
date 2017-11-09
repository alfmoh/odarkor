import { CustomTitleCasePipe } from './custom-titlecase.pipe';

describe('CapitalizeFirstPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomTitleCasePipe();
    expect(pipe).toBeTruthy();
  });
});
