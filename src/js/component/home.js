import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [todo, setTodo] = useState("");
	const [list, setList] = useState([]);
	const [trash, setTrash] = useState(false);
	console.log(list);

	return (
		<div className="text-center mt-5">
			<div>
				<h1>To Do&apos;s</h1>
				<input onChange={e => setTodo(e.target.value)} value={todo} />
				<button
					onClick={() => {
						setList([...list, todo]);
						setTodo("");
					}}>
					Add
				</button>
				{list &&
					list.map((item, index) => {
						<div
							key={index}
							className="container-row"
							onMouseEnter={() => setTrash(!trash)}
							onMouseLeave={() => setTrash(!trash)}>
							<div className="d-flex justify-content-start col">
								<p>{item}</p>
							</div>
							<div className="d-flex justify-content-end col">
								{trash === false ? (
									<button>
										<i className="fas fa-times"></i>
									</button>
								) : (
									""
								)}
							</div>
						</div>;
					})}
			</div>
		</div>
	);
}

export default Home;
