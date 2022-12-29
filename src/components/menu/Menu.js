//import React, { useState } from "react";

const Menu = ({ menuSelect, menuClick }) => {
    // State

    //Comportement
    console.log(menuSelect[0]);
    // Affichage
    return (
        <div className="container-menu" onClick={()=>menuClick("")}>
            <h1 className="menu-h1">Menu</h1>
            <p className="p-menu">{menuSelect[0].strMeal}</p>
            <div className="box-img-ingredient">
                <img src={menuSelect[0].strMealThumb} alt={menuSelect[0].strMeal}></img>
                <div className="ingredients-list">
                    {menuSelect[0].strInstructions.split(".").map((phrase) => (
                        <p>{phrase}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
