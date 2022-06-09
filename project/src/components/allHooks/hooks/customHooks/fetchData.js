import { useEffect, useState, useDebugValue } from 'react'
import axios from 'axios'
export const fetchData = (url) => {
  // useDebugValue is used on custom hooks to debug a label on dev-tools
  useDebugValue(url)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    async function fetchComments() {
      try {
        const { data } = await axios.get(url)
        setResponse(data)
      } catch (error) {
        setError(error)
      }
    }
    fetchComments()
  }, [setError, setResponse, url])
  useDebugValue(response, (item) => item[0].name)
  return [response, error]
}
