import { login, ParamsLogin } from '../services/apis';
import { AccountType } from '../reducers/account';

export function loginAction(data: ParamsLogin) {
  return async (dispatch: any) => {
    const result = await login(data);
    console.log({ result })
    dispatch({ type: AccountType.Login, payload: result });
  }
}
