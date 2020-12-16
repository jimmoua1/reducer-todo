import React, { useReducer, useRef } from "react";
import { reducer, initialState } from "../reducer/reducer";

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD", name: inputRef.current.value });
    inputRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" ref={inputRef} placeholder="...todo" />
        <button>Add Todo</button>
      </form>
      <ul>
        {state.length !== 0
          ? state.map((todo, index) => (
              <li
                className={
                  todo.completed === true ? "todo_item_complete" : "todo_item"
                }
                key={index}
                onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}
              >
                {todo.item}
              </li>
            ))
          : null}
      </ul>
      <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
    </div>
  );
};

export default Todo;