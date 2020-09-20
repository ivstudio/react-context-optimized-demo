import React from "react";
import { todoReducer } from "./reducer/todoReducer";

const TodoStateContext = React.createContext();
const TodoDispatchContext = React.createContext();

function TodoContext({ children }) {
  const [state, dispatch] = React.useReducer(todoReducer, []);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

function useTodoState() {
  const context = React.useContext(TodoStateContext);
  if (context === undefined) {
    throw new Error("useTodoState must be used within TodoStateContext");
  }
  return context;
}

function useTodoDispatch() {
  const context = React.useContext(TodoDispatchContext);
  if (context === undefined) {
    throw new Error("useTodoDispatch must be used within TodoStateContext");
  }
  return context;
}

export { TodoContext, useTodoState, useTodoDispatch };
