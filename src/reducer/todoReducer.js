export function todoReducer(state, action) {
  const { payload, type } = action;

  switch (type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 1000),
          title: payload.title
        }
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== payload.id);
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}
