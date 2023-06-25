import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

const UseMemo = () => {
	const [comments, setComments] = useState(null);
	const [toggle, setToggle] = useState(false);
	const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		console.log("run only once");
		axios
			.get("https://jsonplaceholder.typicode.com/posts/1/comments")
			.then((response) => {
				const { data } = response;

				setComments(data);
				console.log(comments);
			});
	}, []);


	useEffect(
    () => {
      const id = setInterval(
        () => setLocalTime(new Date().toLocaleTimeString()),
        1000
      );
      return () => clearInterval(id);
    },
    []
  );
	 const filterComment = comments => {
		console.log("filtereing comments array....")
		return comments && comments.filter(item => item.id === 3)
	 }

	 const filteredComments = useMemo(() => filterComment(comments),[comments])

	 //const filteredComments =  filterComment(comments)) // it will re run every time and is expansive


	 console.log("Rendering usememo component...")


	return (
		<div>
			<h1>UseMemo</h1>
			<button onClick={() => setToggle(!toggle)}>Toggle</button>
			{toggle && <span>Toggle</span>}
		</div>
	);
};

export default UseMemo;
