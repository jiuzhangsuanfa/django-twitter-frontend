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
    .post<any, any>(SERVER + 'login', { username, password });

}
