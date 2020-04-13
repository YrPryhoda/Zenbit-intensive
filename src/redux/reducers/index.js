import { combineReducers } from 'redux';
import shop from './shop';
import auth from './auth';

export default combineReducers({
  shop, auth
});