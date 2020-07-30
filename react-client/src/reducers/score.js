const scoreReducer = (state = 104, action) => {
  switch (action.type) {
    case "UPDATE":
      return state - 1;
    case "PILE_FINISH":
      return state - 5;
    default:
      return state;
  }
};

export default scoreReducer;
