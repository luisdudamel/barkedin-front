export interface UserCredential {
  name: string;
  username: string;
  password: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface UserState {
  name: string;
  username: string;
  logged: boolean;
  id: string;
}

export interface Token {
  token: string;
}

export interface LocalToken {
  token: string;
}
