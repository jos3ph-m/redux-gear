import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';
// redux stuff

// store - stores data, think of state
// reducer - function that used to update store
// two arguments - state, action
// state - old state/state before update
// action - what happened/ what update
// return updated or old state
// dispatch method - send actions to the store
// actions (objects) - MUST HAVE TYPE PROPERTY - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY(copy)

import { createStore } from 'redux';

// store.getState()

// initial store
const initialStore = {
  count: 0,
};

//reducer
function reducer(state, action) {
  console.log({ state, action });
  if (action.type === 'DECREASE') {
    console.log(`hey the type is ${action.type}`);
  }
  return state;
}

// store
const store = createStore(reducer, initialStore);
store.dispatch({ type: 'DECREASE' });
console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
