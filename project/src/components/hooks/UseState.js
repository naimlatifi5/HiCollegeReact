import React, { useState } from "react";
const UseState = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1>UseState hook</h1>
			<div>
				<p>Counter {count}</p>
				<button onClick={() => setCount(count + 1)}>Increment</button>
			</div>
		</>
	);
};
export default UseState;
