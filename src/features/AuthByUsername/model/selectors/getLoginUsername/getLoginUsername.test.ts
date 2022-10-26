import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginIsLoading', () => {
  it('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: '123',
        password: '',
        isLoading: false,
      },
    };
    expect(getLoginUsername(state as StateSchema)).toBe('123');
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toBe('');
  });
});
