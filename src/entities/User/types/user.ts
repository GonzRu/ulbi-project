export interface User {
    id: string;
    usernname: string;
}

export interface UserSchema {
    authData?: User;
}
