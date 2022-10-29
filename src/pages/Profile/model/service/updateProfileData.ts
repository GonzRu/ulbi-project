import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile/model/types/profile';
import { getProfileFormData } from '../selectors/getProfileData/getProfileFormData';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>>(
      'profile/updateProfileData',
      async (_, { extra, rejectWithValue, getState }) => {
        try {
          const profileData = getProfileFormData(getState());
          const response = await extra.api.post<Profile>('/profile', profileData);
          return response.data;
        } catch (e) {
          return rejectWithValue('error');
        }
      },
    );
