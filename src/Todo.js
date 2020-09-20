import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoCounter from "./TodoCounter";
import { TodoContext } from "./TodoContext";

export default function Todo() {
  return (
    <TodoContext>
      <TodoCounter />
      <AddTodo />
      <TodoList />
    </TodoContext>
  );
}
