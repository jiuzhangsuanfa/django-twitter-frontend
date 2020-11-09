import { combineReducers } from 'redux';
import { accountReducer } from './account';

export interface ActionType<T, P = any> {
  type: T;
  payload: P;
}

export const rootReducers = combineReducers({
  noticeReducer: accountReducer
});
