import { observer } from "mobx-react";
import React, { useState } from "react";
import "./styles.css";

const AddToDo = observer(({ props }) => {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      props.addToDo(todo);
      setTodo("");
    }
  };

  const updateTodo = (e) => {
    setTodo(e.target.value);
  };

  const clearTodo = () => {
    props.clear();
  };


  return (
    <div className="container">
      <h1>TODO APP</h1>
      <div className="inputDiv">
        <span>
          <input type="text" value={todo} onChange={updateTodo} />
        </span>
        <span>
          <input type="submit" value="ADD" onClick={addTodo} />
        </span>
        <span>
          <input type="submit" value="Clear" onClick={clearTodo} />
        </span>
      </div>
      <div className="list">
        { props.todoItems !== 0 ? (props.todoItems.map((element) => (
          <div className="items" key={element.id}>
            {element.item}
          </div>
        ))) : null}
      </div>
    </div>
  );
});

export default AddToDo;
