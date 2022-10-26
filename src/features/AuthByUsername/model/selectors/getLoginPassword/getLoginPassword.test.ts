import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginIsLoading', () => {
  it('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: '123',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toBe('123');
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toBe('');
  });
});
