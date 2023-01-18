import { useState } from "react";
import { useGlobalContext } from "../../context";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const CardMeals = ({ meals }) => {
    /// ========
    // STATE
    // =========

    const { addMealToFavoriteBarre, removeMealToFavoriteBarre, idInFavoris } =
        useGlobalContext();

    // ============
    // COMPORTEMENT
    // ============
    const likeUnlike = (arrIdInFavoris) => {
        if (meals.idMeal.includes(Number(arrIdInFavoris))) {
            return (<AiFillHeart />);
        } else {
            return <AiOutlineHeart />;
        }
    };

    const addOrRemove = (id) => {
        if (id.includes(Number(idInFavoris))) {
            return removeMealToFavoriteBarre(meals);
        } else {
            return addMealToFavoriteBarre(meals);
        }
    };

    // =========
    // AFFICHAGE
    // =========
    return (
        <div className="card-meal">
            <div className="img-bkg">
                <img src={meals.strMealThumb} alt="plat {meals.strMeal}" />
            </div>
            <h3 className="card-meal__titre">{meals.strMeal}</h3>
            <div
                className="logo-like"
                onClick={(e) => {
                    e.stopPropagation();
                    addOrRemove(meals.idMeal);
                }}
            >
                {likeUnlike(idInFavoris)}
            </div>
        </div>
    );
};

export default CardMeals;
