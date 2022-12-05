import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateErrors } from 'entities/Profile/model/types/ValidateErrors';

export interface Profile {
    first?: string;
    lastname?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string,
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    formData?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateErrors[];
}
