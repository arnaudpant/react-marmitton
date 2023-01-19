import { useGlobalContext } from "../../context";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function CardRandom() {
    /// ========
    // STATE
    // =========

    const {
        dataRandomContext,
        addMealToFavoriteBarre,
        removeMealToFavoriteBarre,
        idInFavoris,
        setMenuAffiche
    } = useGlobalContext();

    const [likeUnlike, setLikeUnlike] = useState(false);

    // ============
    // COMPORTEMENT
    // ============

    const addOrRemove = (id, idInFavoris) => {
        if (id.includes(Number(idInFavoris))) {
            removeMealToFavoriteBarre(dataRandomContext);
            setLikeUnlike(true);
        } else {
            addMealToFavoriteBarre(dataRandomContext);
            setLikeUnlike(false);
        }
    };

    // =========
    // AFFICHAGE
    // =========

    return (
        <>
            {dataRandomContext && (
                <div
                    className="card-meal"
                    onClick={() => setMenuAffiche(dataRandomContext)}
                >
                    <img
                        src={dataRandomContext.strMealThumb}
                        alt={dataRandomContext.strMeal}
                    ></img>

                    <div className="card-meal__idee-jour">Idée du jour</div>

                    <h2 className="card-meal__titre">
                        {dataRandomContext.strMeal}
                    </h2>

                    <div className="card-meal__text">
                        <p>Pays: {dataRandomContext.strArea}</p>
                        <p>|</p>
                        <p>Catégorie: {dataRandomContext.strCategory}</p>
                    </div>

                    <div
                        className="logo-like"
                        onClick={(e) => {
                            e.stopPropagation();
                            addOrRemove(dataRandomContext.idMeal, idInFavoris);
                            setLikeUnlike(!likeUnlike);
                        }}
                    >
                        {likeUnlike ? <AiFillHeart /> : <AiOutlineHeart />}
                    </div>
                </div>
            )}
        </>
    );
}
