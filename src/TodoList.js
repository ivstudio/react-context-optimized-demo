import React from "react";
import TodoItem from "./TodoItem";
import { useTodoState } from "./TodoContext";

const TodoList = () => {
  const todos = useTodoState();
  return todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
};

export default TodoList;
