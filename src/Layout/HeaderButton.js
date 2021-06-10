import React, { useContext } from 'react'
import classes from "./HeaderButton.module.css"
import CardIcon from "./CardIcon"
import { CartContext } from '../UI/store/Cartcontext';
export const HeaderButton = (props) => {
    const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
    return (
        <button className={classes.button} onClick={props.onClick}>
          <span className={classes.icon}>
            <CardIcon />
          </span>
          <span>Your Cart</span>
          <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
      );
    };
