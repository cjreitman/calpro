// src/reducers/root_reducer.js

import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import logs from '../../src/components/todaysLogs/ducks/logsDataReducer';

const RootReducer = combineReducers({
  session,
  errors,
  logs
});

export default RootReducer;