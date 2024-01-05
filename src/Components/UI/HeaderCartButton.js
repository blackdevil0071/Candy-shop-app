// HeaderCartButton.js
import React, { useState } from 'react';
import { useCandy } from '../CandyContext';
import classes from './HeaderCartButton.module.css';
import CartModal from '../Cart/CartModal';
const HeaderCartButton = () => {
  const { cart } = useCandy();
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);

  const toggleCartModal = () => {
    setIsCartModalVisible((prev) => !prev);
  };

  return (
    <>
      <button className={classes.button} onClick={toggleCartModal}>
        <span>Your Cart</span>
        <span>({cart.length})</span>
      </button>
      {isCartModalVisible && <CartModal />}
    </>
  );
};

export default HeaderCartButton;
