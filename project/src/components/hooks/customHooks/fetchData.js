import { useEffect, useCallback, useState, useDebugValue } from 'react';
import axios from 'axios';
export const useFetchData = (url) => {
  // useDebugValue is used on custom hooks to debug a label on dev-tools
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
