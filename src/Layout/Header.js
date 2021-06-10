import React, { Fragment } from 'react'
import classes from "./Header.module.css"
import { HeaderButton } from './HeaderButton'

export const Header = (props) => {
    return (
        <Fragment>
           <header className={classes.header}>
    <h1>ReactMeals</h1>
    <HeaderButton onClick={props.onShowCart}/>
    
    <button>Card</button>
</header>
<div className={classes['main-image']}>
    <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/code/03-adding-a-meals-cmp/src/assets/meals.jpg"/>
</div>
            
        </Fragment>
    )
}
