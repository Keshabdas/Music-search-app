/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './Reducers';
import mySaga from "./Saga/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
  
sagaMiddleware.run(mySaga);

export default store;
