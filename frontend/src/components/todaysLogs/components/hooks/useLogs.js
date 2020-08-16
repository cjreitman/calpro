import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTodaysLogs,
} from '../../ducks/logsActions';

const useLogs = () => {
  const currentUser = useSelector((state) => state.session.currentUser);
  const todaysLogs = useSelector((state) => state.logs.todaysLogs)
  // const isLogsLoading = useSelector((state) => state.documents.ui.isDocumentsLoading);

  const dispatch = useDispatch();

  const handleFetchTodaysLogs = (userId) => {
    dispatch(fetchTodaysLogs(userId));
  };

  return {
    handleFetchTodaysLogs,
    currentUser,
    todaysLogs,
  };
};

export default useLogs;