export const increment = (arg) => {
  return {
    type: "INCREMENT",
    payload: arg,
  };
};

export const drawStack = () => {
  return {
    type: "DRAW_STACK",
  };
};
