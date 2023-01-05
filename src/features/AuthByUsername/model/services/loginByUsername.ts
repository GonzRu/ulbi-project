import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>>(
      'login/loginByUsername',
      async (authData, thunkAPI) => {
        const {
          dispatch,
          extra,
          rejectWithValue,
        } = thunkAPI;

        try {
          const response = await extra.api.post<User>('http://localhost:8000/login', authData);
          const { data } = response;

          if (!data) throw new Error();

          dispatch(userActions.setAuthData(data));
          localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));

          return data;
        } catch (e) {
          return rejectWithValue('error');
        }
      },
    );
