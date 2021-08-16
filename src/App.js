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

import reducer from './reducer';

// initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

// store
const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
