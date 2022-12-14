import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/getAddCommentFormSelector';
import cl from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const onCommentTextChanged = useCallback((value) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendCommentWrapper = useCallback(() => {
    if (!text) return;

    onSendComment(text);
    onCommentTextChanged('');
  }, [onCommentTextChanged, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cl.AddCommentForm, {}, [className])}>
        <Input
          className={cl.input}
          value={text}
          onChange={onCommentTextChanged}
          placeholder={t('Введите текст комментария')}
        />
        <Button
          onClick={onSendCommentWrapper}
          theme="outline"
        >
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
