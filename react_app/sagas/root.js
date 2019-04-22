import { fork } from 'redux-saga/effects';
import actionWatchers from './watchers';

export default function* coreSaga() {
  yield fork(actionWatchers);
}