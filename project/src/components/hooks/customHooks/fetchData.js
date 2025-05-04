import { useEffect, useCallback, useState, useDebugValue } from 'react';
import axios from 'axios';
export const useFetchData = (url) => {
  // useDebugValue is used on custom hooks to debug a label on dev-tools
  // useDebugValue is used to display a label in the React DevTools for custom hooks
  // It can be used to provide additional information about the state of the hook
  // or to indicate whether the hook is in a loading or error state.
  useDebugValue(url);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchComments = useCallback(async () => {
    try {
      const { data } = await axios.get(url);
      setResponse(data);
    } catch (error) {
      setError(error);
    }
  }, [url]);

  useEffect(() => {
    fetchComments();
  }, [setError, setResponse, url, fetchComments]);

  useDebugValue('This is important url');
  return [response, error];
};
