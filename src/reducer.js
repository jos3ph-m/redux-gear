import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from './actions';

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    console.log('you decreased');
  }
  if (action.type === INCREASE) {
    console.log('you increased');
  }
  if (action.type === REMOVE) {
    console.log(action.payload.id);
  }
  return state;
}

export default reducer;
