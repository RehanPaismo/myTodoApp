import { observer } from "mobx-react";
import React, { useState } from "react";
import "./styles.css";

const AddToDo = observer (({myProps}) => {
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    if (todo !== ""){
    myProps.addToDo(todo);
    setTodo("");}
  };

  const updateTodo = (e) =>{
    setTodo(e.target.value);
  }

  const clearTodo = () => {
    myProps.clear();
  }
  const printToDoList = () =>{
    
    if (myProps.todoItems.length !== 0){
      return myProps.todoItems.map((element) => {
        return <div className="items" key={element.id}>{element.item}</div>;
      })
    }
  }
  
  return (
    <div className="container">
      <h1>TODO APP</h1>
      <div className="inputDiv">
        <span>
          <input
            type="text"
            value={todo}
            onChange={updateTodo}
          />
        </span>
        <span>
          <input type="submit" value="ADD" onClick={addTodo}/>
        
        </span>
        <span>
          <input type="submit" value="Clear" onClick={clearTodo}/>
        
        </span>
      </div>
      <div className="list">
        {printToDoList()}
      </div>
    </div>
  );
})

export default AddToDo;
