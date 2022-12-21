//import React, { useState } from "react";

const Menu = ({ menu }) => {
    // State


    //Comportement


    return (
        <>
            <h1 className="menu-h1">Menu</h1>
            <p className="p-menu">{menu.strMeal}</p>
            <div className="box-img-ingredient">
                <img src={menu.strMealThumb} alt={menu.strMeal}></img>
                <div className="ingredients-list">
                    <p>{menu.strInstructions}</p>
                </div>
            </div>
        </>
    );
};

export default Menu;
