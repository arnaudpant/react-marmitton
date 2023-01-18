import React from "react";
import { useGlobalContext } from "../../context";
import FavorisMeal from "./FavorisMeal";

const FavoriteBarre = () => {
    /// ========
    // STATE
    // =========

    const { listFavorisMeals } = useGlobalContext();

    // ============
    // COMPORTEMENT
    // ============

    // =========
    // AFFICHAGE
    // =========

    return (
        <div className="favorite-bar">
            {listFavorisMeals.map((favoriMeal) => (
                <FavorisMeal
                    key={favoriMeal.idMeal}
                    menuInFavori={favoriMeal}
                />
            ))}
        </div>
    );
};

export default FavoriteBarre;
