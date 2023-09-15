// import React,{useState} from "react";
// import './../styles/App.css';

// const [toDoList,setToDoList] = useState("")

// const App = () => {
//   const addToDo =()=>{

//   }
//   return (
//     <div>
//         <h1>To Do List</h1>
//         <input type="text" id="textInput" placeholder="Add item"></input>
//         <button type="button" onClick={addToDo}>To Do</button>

//     </div>
//   )
// }

// export default App;

import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [task, setTask] = useState("");

  const addToDo = () => {
    if (task.trim() !== "") {
      setToDoList([...toDoList, task]);
      setTask("");
    }
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };


  const deleteToDo = (index) => {
    const updatedList = [...toDoList];
    updatedList.splice(index, 1);
    setToDoList(updatedList);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <input type="text" id="textInput" placeholder="Add item" value={task} onChange={handleTaskChange}/>
      <button type="button" onClick={addToDo}> Add To Do </button>
      <ul>
        {toDoList.map((item, index) => (
          <li key={index} > 
            {item} <button onClick={() => deleteToDo(index)}>Delete</button>
          
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
