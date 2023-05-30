import React from "react";
import UseEffect from "./UseEffect";
import AsyncUseEffect from "./AsyncUseEffect";

const Main = () => {
	return (
		<>
			<h2>Use effect hook</h2>
			<UseEffect />
			<br />
			<br />
			<h2>Use effect hook with async </h2>
			<AsyncUseEffect />
		</>
	);
};

export default Main;
