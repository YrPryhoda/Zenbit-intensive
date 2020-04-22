import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // for use localStorage

import shop from './shop';
import auth from './auth';
import cart from './cart';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'cart']
}

const rootReducer = combineReducers({
  shop,
  auth,
  cart,
});

export default persistReducer(persistConfig, rootReducer);