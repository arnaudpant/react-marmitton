import React from "react";
import { useGlobalContext } from "../../context";
import { TiDelete } from "react-icons/ti";

const CardFavoris = ({ favMeal, menuFavClick }) => {
    const { removeFavorite } = useGlobalContext();

    return (
        <div
            className="card-favori-img"
             onClick={() => menuFavClick(favMeal)}
        >
            <img src={favMeal.strMealThumb} alt={`Menu ${favMeal.strMeal}`} />
            <div className="logo-delete" onClick={() => removeFavorite(favMeal.idMeal)}>
                <TiDelete />
            </div>
        </div>
    );
};

export default CardFavoris;
