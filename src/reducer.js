import { DECREASE, INCREASE } from './actions';

function reducer(state, action) {
  console.log({ state, action });
  if (action.type === DECREASE) {
    // DONT MUTATE
    // state.count = state.count - 1;
    return { ...state, count: state.count - 1 };
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }

  return state;
}

export default reducer;
