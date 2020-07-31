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

export const apiCallStart = () => {
  return {
    type: "API_CALL_START",
  };
};

export const apiCallSuccess = (data) => {
  return {
    type: "API_CALL_SUCCESS",
    payload: data,
  };
};

export const apiCallFailure = (err) => {
  return {
    type: "API_CALL_FAILURE",
    payload: err,
  };
};
