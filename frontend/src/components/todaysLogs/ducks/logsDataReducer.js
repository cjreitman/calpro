
import {
  FETCH_TODAYS_LOGS_FULFILLED,
  FETCH_TODAYS_LOGS_REJECTED,
} from './logsActions';

const initialState = {
  todaysLogs: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODAYS_LOGS_FULFILLED: {
      return {
        ...state,
        todaysLogs: action.payload,
      };
    }
    case FETCH_TODAYS_LOGS_REJECTED: {
      return {
        ...state,
        todaysLogsError: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
