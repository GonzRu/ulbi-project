import { counterActions, counterReducer } from 'entities/Counter/slice/counterSlice';

describe('counterSlice', () => {
  test('increment', () => {
    const state = { value: 10 };
    expect(
      counterReducer(state, counterActions.increment),
    ).toEqual({ value: 11 });
  });

  test('decrement', () => {
    const state = { value: 10 };
    expect(
      counterReducer(state, counterActions.decrement),
    ).toEqual({ value: 9 });
  });

  test('should work with empty state', () => {
    expect(
      counterReducer(undefined, counterActions.increment),
    ).toEqual({ value: 1 });
  });
});
