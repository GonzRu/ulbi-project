import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import axios from 'axios';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    {rejectValue: string}>(
      'login/loginByUsername',
      async (authData, thunkAPI) => {
        try {
          const response = await axios.post<User>('http://localhost:8000/login', authData);
          const { data } = response;

          if (!data) throw new Error();

          thunkAPI.dispatch(userActions.setAuthData(data));
          localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));

          return data;
        } catch (e) {
          return thunkAPI.rejectWithValue('error');
        }
      },
    );
