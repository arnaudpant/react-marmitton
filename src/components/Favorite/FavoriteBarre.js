import React from "react";
import { useGlobalContext } from "../../context";
import CardFavoris from "../CardFavoris/CardFavoris";

const FavoriteBarre = () => {
    // State

    // Comportement
    const { favorite } = useGlobalContext();

    return (
        <div className="favorite-bar">
            {favorite.map((favori) => (
                <CardFavoris key={favori.idMeal} favMeal={favori} />
            ))}
        </div>
    );
};

export default FavoriteBarre;
