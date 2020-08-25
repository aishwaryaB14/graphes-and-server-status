import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import appReducer from '../reducer';


const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  // whitelist : ['settings', 'timeOut', 'loginReducer', 'form' ]
};

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

const pR = persistReducer(persistConfig, rootReducer);

export const store = createStore(pR, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store, { timeout: 1000 });
