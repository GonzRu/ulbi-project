import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  it('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toBe(true);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toBe(false);
  });
});
