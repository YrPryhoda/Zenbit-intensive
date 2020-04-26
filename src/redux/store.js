import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';

import myFirebaseMiddlewre from './utils/api2.0';

const initialState = {};

const middleware = [thunk, myFirebaseMiddlewre]

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

export const persistor = persistStore(store);
