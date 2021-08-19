import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from './actions';

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    return console.log('you decreased');
  }
  if (action.type === INCREASE) {
    return console.log('you increased');
  }
  if (action.type === DECREASE) {
    return console.log(action.type);
  }
  return state;
}

export default reducer;
