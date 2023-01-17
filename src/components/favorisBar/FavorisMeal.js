import React from "react";
import { useGlobalContext } from "../../context";
import { TiDelete } from "react-icons/ti";


const FavorisMeal = ({menuInFavori}) => {
    // ========
    // STATE
    // =========
    const {removeMealToFavoriteBarre} = useGlobalContext();

    // ============
    // COMPORTEMENT
    // ============



    // =========
    // AFFICHAGE
    // =========
    return (
        <div
            className="card-favori-img"
            //  onClick={() => menuFavClick(favMeal)}
        >
            <img src={menuInFavori.strMealThumb} alt={`Menu ${menuInFavori.strMeal}`} />

            <div className="logo-delete" onClick={() => removeMealToFavoriteBarre(menuInFavori)}> 
            <TiDelete />
        </div>
        </div>
    );
};

export default FavorisMeal;
