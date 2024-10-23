import React, { useState } from "react";
import "./styles.css";

const AddToDo = () => {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState();

  const Add = () => {
    if (todo != ""){
    setList([...list, todo]);
    setTodo("");}
  };
  
  return (
    <div className="container">
      <h1>TODO APP</h1>
      <div className="inputDiv">
        <span>
          <input
            type="text"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
        </span>
        <span>
          <input type="submit" value="ADD" onClick={Add}></input>
        
        </span>
      </div>
      <div className="list">
        {list.map((element, index) => {
          return <div className="items" key={index}>{element}</div>;
        })}
      </div>
    </div>
  );
};

export default AddToDo;
