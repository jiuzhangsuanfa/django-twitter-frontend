import { SERVER } from '../../constants';
import { axios } from './interceptors';

export interface ParamsLogin {
  username: string;
  password: string;
}

export interface ReturnLogin {
  token: string;
  user: {
    username: string;
    avatar: string;
  }
}

export async function login({ username, password }: ParamsLogin): Promise<ReturnLogin> {

  return axios
    .post<any, any>(SERVER + 'accounts/login/', { username, password });

}

export interface ParamsSignUp {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface ReturnSignUp {
  token: string;
  user: {
    username: string;
    avatar: string;
  }
}

export async function signup({ username, password, confirmPassword }: ParamsSignUp): Promise<ReturnSignUp> {

  return axios
    .post<any, any>(SERVER + 'accounts/signup/', { username, password, confirmPassword });

}
