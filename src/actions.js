export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const REMOVE = 'REMOVE';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_TOTALS = 'GET_TOTALS';
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';

export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};

export const increaseItem = (id) => {
  return { type: INCREASE, payload: { id } };
};

export const decreaseItem = (id, amount) => {
  return { type: DECREASE, payload: { id, amount } };
};

export const toggleItem = (id, toggle) => {
  return { type: TOGGLE_AMOUNT, payload: {} };
};
