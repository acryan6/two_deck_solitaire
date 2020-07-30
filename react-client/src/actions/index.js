export const doubleClick = (arg) => {
  return {
    type: "DOUBLE_CLICK",
    payload: arg,
  };
};

export const increment = (arg) => {
  return {
    type: "INCREMENT",
    payload: arg,
  };
};

export const decrement = (arg) => {
  return {
    type: "DECREMENT",
    payload: arg,
  };
};

export const drawStack = () => {
  return {
    type: "DRAW_STACK",
  };
};

export const update = () => {
  return {
    type: "UPDATE",
  };
};

export const pileFinish = () => {
  return {
    type: "PILE_FINISH",
  };
};
