import { DECREASE, INCREASE, CLEAR_CART } from './actions';

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    return console.log(action.type);
  }
  if (action.type === DECREASE) {
    return console.log(action.type);
  }
  if (action.type === DECREASE) {
    return console.log(action.type);
  }
  return state;
}

export default reducer;
