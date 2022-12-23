//import React, { useState } from "react";

const Menu = ({ menu }) => {
    // State

    //Comportement

    // Affichage
    return (
        <>
            <h1 className="menu-h1">Menu</h1>
            <p className="p-menu">{menu.strMeal}</p>
            <div className="box-img-ingredient">
                <img src={menu.strMealThumb} alt={menu.strMeal}></img>
                <div className="ingredients-list">
                    {menu.strInstructions.split(".").map((phrase) => (
                        <p>{phrase}</p>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Menu;
