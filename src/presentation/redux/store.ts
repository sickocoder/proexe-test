import { createStore } from 'redux';

import rootReducer from './root-reducer';

export const makeStore = () => createStore(rootReducer);

export const store = makeStore();
