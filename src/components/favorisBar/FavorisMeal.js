import React from "react";
import { useGlobalContext } from "../../context";
import { TiDelete } from "react-icons/ti";

const FavorisMeal = ({ menuInFavori }) => {
    // ========
    // STATE
    // =========
    const { removeMealToFavoriteBarre, setMenuAffiche } = useGlobalContext();

    // ============
    // COMPORTEMENT
    // ============

    // =========
    // AFFICHAGE
    // =========
    return (
        <div
            className="card-favori-img"
            onClick={() => setMenuAffiche(menuInFavori)}
        >
            <img
                src={menuInFavori.strMealThumb}
                alt={`Menu ${menuInFavori.strMeal}`}
            />

            <div
                className="logo-delete"
                onClick={(e) => {
                    e.stopPropagation();
                    removeMealToFavoriteBarre(menuInFavori);
                }}
                idDeleted={menuInFavori.idMeal}
            >
                <TiDelete />
            </div>
        </div>
    );
};

export default FavorisMeal;
