export const initialState = [
  {
    item: "Learn about reducers",
    completed: true,
    id: Math.random() * 1000000000
  },
  {
    item: "House work",
    completed: true,
    id: Math.random() * 1000000000
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Math.random() * 100000000,
          item: action.name,
          completed: false
        }
      ];

    case "TOGGLE":
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
          return todo;
        }
        return todo;
      });
    case "CLEAR":
      return state.filter(todo => todo.completed === false);
    default:
      return state;
  }
};