import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments').then((response) => {
      const { data } = response;
      setComments(data);
    });
  }, []);

  const filterComment = (comments) => {
    console.log('Filtering comments...'); // expensive operation see in console
    return comments.filter((item) => item.id === 3);
  };
  // useMemo will memoize the result of the function and only re-run it when the dependencies change
  // in this case, it will only re-run when the comments array changes
  // this is useful when you have a lot of data and you want to avoid re-running the function every time
  const filteredComments = useMemo(() => filterComment(comments), [comments]);
  //const filteredComments = filterComment(comments); // it will re run every time and is expansive

  return (
    <div>
      <h1>UseMemo</h1>
      <br />
      <button onClick={() => setCount(count + 1)}>Re-render</button>
      <p>Count: {count}</p>
      <p>Filtered comments: {filteredComments.length}</p>

      <ul>
        {comments.map((item) => (
          <li key={item.id}>
            {item.name} - {item.email}
          </li>
        ))}
      </ul>
      <p>Filtered comments:</p>
      <ul>
        {filteredComments.map((item) => (
          <li key={item.id}>
            {item.name} - {item.email}
          </li>
        ))}
      </ul>
      <br />
    </div>
  );
};

export default UseMemo;
