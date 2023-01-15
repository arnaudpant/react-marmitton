import React from "react";
import { useGlobalContext } from "../../context";
import CardFavoris from "../CardFavoris/CardFavoris";

const FavoriteBarre = (menuFavClick) => {
    // State

    // Comportement
    const { favorite } = useGlobalContext();

    return (
        <div className="favorite-bar">
            {favorite.map((favori) => (
                <CardFavoris key={favori.idMeal} favMeal={favori} menuFavClick={menuFavClick} />
            ))}
        </div>
    );
};

export default FavoriteBarre;
