import React, { Fragment } from 'react'
import AvailabeMeals  from './AvailabeMeals'
import { Mealssummary } from './Mealssummary'

export const Meals = () => {
    return (
        <Fragment>
            <Mealssummary/>
            <AvailabeMeals/>
        </Fragment>
    )
}
