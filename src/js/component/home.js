import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<inout
				placeholder="todos"
				onChange={e => setTodos(e.target.value)}></inout>
			<button>Add ToDo</button>
		</div>
	);
}
