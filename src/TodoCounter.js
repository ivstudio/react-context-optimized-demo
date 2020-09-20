import React from "react";
import { useTodoState } from "./TodoContext";

const TodoCounter = () => {
  const todos = useTodoState();
  return <h2>Total of todos: {todos.length}</h2>;
};

export default TodoCounter;
