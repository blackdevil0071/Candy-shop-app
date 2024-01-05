// CartModal.js
import React from 'react';
import { useCandy } from '../CandyContext';
import classes from './CartModal.module.css';

const CartModal = () => {
  const { cart } = useCandy();

  return (
    <div className={classes.modal}>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name}-{item.description} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartModal;
