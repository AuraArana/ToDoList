import React, { useState } from "react";

//create your first component
export function Home() {
	const [todo, setTodo] = useState("");
	const [list, setList] = useState([]);
	const [trashTodo, setTrashTodo] = useState([]);
	const [trash, setTrash] = useState(false);
	console.log(list);

	const updateTodo = e => {
		setTodo(e.target.value);
	};

	const handleAdd = () => {
		setList([...list, todo]);
		setTrashTodo([...trashTodo, false]);
		setTodo("");
	};

	function deleteElem(arr, itemdel) {
		const result = arr.filter((list, index3) => {
			return index3 != itemdel;
		});
		setList(result);
	}

	function MouseOver(index) {
		document.getElementById(index).style.visibility = "visible";
	}

	function MouseOut(index) {
		document.getElementById(index).style.visibility = "hidden";
	}

	return (
		<div className="container " style={{ with: "30%", margin: "auto" }}>
			<div
				className=" text-center container mt-5 todoListMain2"
				style={{ with: "30%", margin: "auto" }}>
				<div>
					<h1>
						<em> To-Do&apos;s</em>
					</h1>
				</div>
				<input
					type="text"
					onKeyPress={event => {
						if (event.key === "Enter") {
							handleAdd();
						}
					}}
					placeholder="Add a new to-do"
					onChange={updateTodo}
					value={todo}></input>
			</div>

			{list.map((item, index) => (
				<div
					key={index}
					onMouseOver={() => MouseOver(index)}
					onMouseOut={() => MouseOut(index)}
					id="demo"
					className="todoListMain container row"
					style={{ with: "30%", margin: "auto" }}
					onClick={() => deleteElem(list, index)}>
					<div className="d-flex justify-content-start col">
						{item}
					</div>
					<div className="d-flex justify-content-end col">
						<i
							style={{ visibility: "hidden" }}
							className="fas fa-trash-alt"
							id={index}></i>
					</div>
				</div>
			))}
		</div>
	);
}
