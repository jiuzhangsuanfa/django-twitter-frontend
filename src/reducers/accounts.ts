import { ActionType } from './index';

export enum AccountType {
  Login, Logout, Signup
}

export const accountReducer = (state: any, action: ActionType<AccountType>) => {
  console.log(action);
  const { token, user } = action.payload || {};
  switch (action.type) {
    case AccountType.Login:
    case AccountType.Logout:
    case AccountType.Signup:
    default:
      return { token, user };
  }
};
