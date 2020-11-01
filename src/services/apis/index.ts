import { SERVER } from '../../constants';
import { axios } from './interceptors';

export interface ParamsLogin {
  username: string;
  password: string;
}

export async function login({ username, password }: ParamsLogin) {

  return axios
    .post(SERVER + 'login', { username, password })
    .then(response => response.data);

}
