import React, { useState } from "react";
import { useTodoDispatch } from "./TodoContext";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useTodoDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    dispatch({ type: "ADD_TODO", payload: { title: todo } });
    setTodo("");
  };

  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </>
  );
};

export default AddTodo;
