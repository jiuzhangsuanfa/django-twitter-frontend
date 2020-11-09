import { login, ParamsLogin } from '../services/apis';
import { AccountType } from '../reducers/accounts';

export function loginAction(data: ParamsLogin) {
  return async (dispatch: any) => {
    const result = await login(data);
    dispatch({ type: AccountType.Login, payload: result });
  }
}
