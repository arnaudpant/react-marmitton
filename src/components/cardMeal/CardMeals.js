import React from "react";

const CardMeals = ({ meals }) => {
    // State

    // Comportement
    console.log(meals);

    // Afichage
    return (
        <div className="card-meal">
            <div className="img-bkg">
                <img src={meals.strMealThumb} alt="" />
            </div>
            <h2>{meals.strMeal}</h2>
        </div>
    )
};

export default CardMeals;
