import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile/model/types/profile';
import { validateProfileData } from 'pages/Profile/model/service/validateProfileData/validateProfileData';
import { ValidateProfileError } from 'entities/Profile/model/types/ValidateProfileError';
import { getProfileForm } from 'pages/Profile/model/selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>>(
      'profile/updateProfileData',
      async (_, { extra, rejectWithValue, getState }) => {
        try {
          const profileData = getProfileForm(getState());

          const validateErrors = validateProfileData(profileData);
          if (validateErrors.length > 0) {
            return rejectWithValue(validateErrors);
          }

          const response = await extra.api.put<Profile>('/profile', profileData);

          if (!response.data) {
            throw new Error();
          }

          return response.data;
        } catch (e) {
          return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
      },
    );
