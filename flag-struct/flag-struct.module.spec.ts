import { FlagStructModule } from './flag-struct.module';

describe('FlagStructModule', () => {
  let flagStructModule: FlagStructModule;

  beforeEach(() => {
    flagStructModule = new FlagStructModule();
  });

  it('should create an instance', () => {
    expect(flagStructModule).toBeTruthy();
  });
});
