import React, { useState } from "react";
import Menu from "../menu/Menu";

const CardMeals = ({ meals, positionClick }) => {
    // State
    const [isActive, setActive] = useState(false);

    // Comportement

    const toggleClass = () => {
        setActive(!isActive);
    };

    // Afichage
    return (
        <>
            <div className="card-meal" onClick={toggleClass}>
                <div className="img-bkg">
                    <img src={meals.strMealThumb} alt="plat {meals.strMeal}" />
                </div>
                <h2>{meals.strMeal}</h2>
            </div>
            <div
                className="menu"
                onClick={toggleClass}
                style={{ top: positionClick + "px" }}
            >
                {isActive && <Menu menu={meals} />}
            </div>
        </>
    );
};

export default CardMeals;
