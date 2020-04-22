import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export const persistor = persistStore(store);

//export default {store, persistor};