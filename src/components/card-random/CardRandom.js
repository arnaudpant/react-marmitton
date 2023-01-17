import { useGlobalContext } from "../../context";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

export default function CardRandom() {
    /// ========
    // STATE
    // =========

    const { dataRandomContext, addMealToFavoriteBarre, removeMealToFavoriteBarre } = useGlobalContext();
    const [toggleLike, setToggleLike] = useState(false)
    
    
    
    
    
    // ============
    // COMPORTEMENT
    // ============




    // =========
    // AFFICHAGE
    // =========

    return (
        <>
            {dataRandomContext && (
                <div
                    className="card-meal"
                    // onClick={() => cardMenuClick("affichageMenuRandom")}
                >
                    <img
                        src={dataRandomContext.strMealThumb}
                        alt={dataRandomContext.strMeal}
                    ></img>

                    <div className="card-meal__idee-jour">Idée du jour</div>

                    <h2 className="card-meal__titre">{dataRandomContext.strMeal}</h2>

                    <div className="card-meal__text">
                        <p>Pays: {dataRandomContext.strArea}</p>
                        <p>|</p>
                        <p>Catégorie: {dataRandomContext.strCategory}</p>
                    </div>

                    <div
                        className="logo-like"
                        onClick={(e) => {
                            e.stopPropagation();
                            setToggleLike(!toggleLike);
                            !toggleLike ? 
                            addMealToFavoriteBarre(dataRandomContext) : removeMealToFavoriteBarre(dataRandomContext)
                        }}
                    >
                        {toggleLike ? 
                            <AiFillHeart /> : <AiOutlineHeart />
                        }
                    </div>
                </div>
            )}
        </>
    );
}
