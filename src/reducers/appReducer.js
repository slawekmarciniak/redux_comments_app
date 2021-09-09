import { ADD, EDIT, DELETE } from "../actions/appActions";

export const appReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case EDIT:
      return state.map((currentEl) => {
        if (currentEl.id !== action.payload.id) {
          return currentEl;
        }
        const { author, comment, rate } = action.payload;

        return {
          author,
          comment,
          id: action.id,
          rate,
        };
      });
    case DELETE:
      return state.filter((currentEl) => currentEl.id !== action.payload.id);
    default:
      console.log(`nie mamy akcji typu ${action.type}`);
      return state;
  }
};
