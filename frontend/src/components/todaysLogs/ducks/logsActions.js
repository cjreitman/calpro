// src/actions/session_actions.js

import axios from 'axios';

export const FETCH_TODAYS_LOGS_START = 'FETCH_TODAYS_LOGS_START';
export const FETCH_TODAYS_LOGS_FULFILLED = 'FETCH_TODAYS_LOGS_FULFILLED';
export const FETCH_TODAYS_LOGS_REJECTED = 'FETCH_TODAYS_LOGS_REJECTED';

export const fetchTodaysLogs = userId => (
  (dispatch) => {
    dispatch({ type: FETCH_TODAYS_LOGS_START });
    axios.get(`/api/logs/user/${userId}`)
      .then((response) => {
        dispatch({
          type: FETCH_TODAYS_LOGS_FULFILLED,
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_TODAYS_LOGS_REJECTED,
          payload: err,
        });
      });
  }
);