import React from 'react'
import { Card } from '../../UI/Card';
import classes from "./AvailabeMeal.module.css"
import { MealItem } from './MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Nikunj Sir',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'BB Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
  
  const AvailabeMeals = (props) => {
    const mealsList = DUMMY_MEALS.map((meal) => <li>{<MealItem key={meal.id} name={meal.name} 
     description={meal. description}
    price={meal.price} id={meal.id}/>}</li>);
  
    return (
      <section className={classes.meals}>
          <Card>
        <ul>{mealsList}</ul>
        </Card>
      </section>
    );
  };
  
  export default AvailabeMeals;