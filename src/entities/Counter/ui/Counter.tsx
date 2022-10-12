import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter/slice/counterSlice';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from 'entities/Counter/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';
import cl from './Counter.module.scss';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button
        data-testid="increment-btn"
        theme="outline"
        onClick={increment}
      >
        {t('increment')}
      </Button>
      <Button
        data-testid="decrement-btn"
        theme="outline"
        onClick={decrement}
      >
        {t('decrement')}
      </Button>
    </div>
  );
};
