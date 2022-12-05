import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile/model/types/profile';
import { validateProfileData } from 'pages/Profile/model/service/validateProfileData/validateProfileData';
import { ValidateErrors } from 'entities/Profile/model/types/ValidateErrors';
import { getProfileFormData } from '../selectors/getProfileData/getProfileFormData';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateErrors[]>>(
      'profile/updateProfileData',
      async (_, { extra, rejectWithValue, getState }) => {
        try {
          const profileData = getProfileFormData(getState());

          const validateErrors = validateProfileData(profileData);
          if (validateErrors.length > 0) {
            return rejectWithValue(validateErrors);
          }

          const response = await extra.api.post<Profile>('/profile', profileData);
          return response.data;
        } catch (e) {
          return rejectWithValue([ValidateErrors.SERVER_ERROR]);
        }
      },
    );
