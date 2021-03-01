import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [todo, setTodo] = useState("");
	const [list, setList] = useState([]);

	return (
		<div className="text-center mt-5">
            <div>
                <h1>To Do's</h1>
                <input onChange={e => setTodo(e.target.value)} value={todo} />
			    <button
				onClick={() => {
					setList([...list, todo]);
					setTodo("");
				}}>
				Add
			    </button>
			{list.map((item, index) => {
                <div 
                    key={index}
                    className="row"
                    onMouseEnter={() => setTrash(!trash)}
                    onMouseLeave={() => setTrash(!trash)}>
                    <div className="d-flex justify-content-end col">
                        <p>{item}</p>
                    </div>
                    <div class="d-flex justify-content-end col">
                        {!trash === false ? ( 
                    <button>
                        <i class="fas fa-times"></i>
                    </button>
                    ) : ("")}
                    </div>
                </div>    
			})}
        </div>);  

export default Home;
