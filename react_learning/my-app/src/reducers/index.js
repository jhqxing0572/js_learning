export const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'INIT':
      return [...payload];
    case 'ADD':
      return [...state, { ...payload }];
    case 'DEL':
      return [...state.slice(0, payload), ...state.slice(payload + 1)];
    case 'MOD':
      return state.map((todo, index) => {
        return index === payload
          ? {
              content: todo.content,
              isCompleted: !todo.isCompleted,
            }
          : todo;
      });
    default:
      return state;
  }
};
