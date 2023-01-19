
import { useGlobalContext } from "../../context";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

const CardMeals = ({ meals }) => {
    /// ========
    // STATE
    // =========

    const { addMealToFavoriteBarre, removeMealToFavoriteBarre, idInFavoris, setMenuAffiche } =
        useGlobalContext();
    const [likeUnlike, setLikeUnlike] = useState(false);

    // ============
    // COMPORTEMENT
    // ============

    const addOrRemove = () => {
        if (meals.idMeal.includes(Number(idInFavoris))) {
            removeMealToFavoriteBarre(meals);
            setLikeUnlike(true);
        } else {
            addMealToFavoriteBarre(meals);
            setLikeUnlike(false);
        }
    };

    // =========
    // AFFICHAGE
    // =========
    return (
        <div className="card-meal" onClick={()=>{setMenuAffiche(meals)}}>
            <div className="img-bkg">
                <img src={meals.strMealThumb} alt="plat {meals.strMeal}" />
            </div>
            <h3 className="card-meal__titre">{meals.strMeal}</h3>
            <div
                className="logo-like"
                onClick={(e) => {
                    e.stopPropagation();
                    addOrRemove(meals.idMeal);
                    setLikeUnlike(!likeUnlike);
                }}
            >
                {likeUnlike ? <AiFillHeart /> : <AiOutlineHeart />}
            </div>
        </div>
    );
};

export default CardMeals;
