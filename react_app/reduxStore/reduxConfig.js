import 'regenerator-runtime/runtime'
import {createStore, applyMiddleware} from 'redux';
import allReducers from '../reducers';
import createSagaMiddleware from 'redux-saga'
import coreSaga from '../sagas/root'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(allReducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(coreSaga)
export default  store