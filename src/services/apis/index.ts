import Axios from 'axios';
import { SERVER } from '../../constants';

export interface ParamsLogin {
  username: string;
  password: string;
}

export async function login({ username, password }: ParamsLogin) {

  return Axios
    .post(SERVER + 'login', { username, password })
    .then(response => response.data);

}
