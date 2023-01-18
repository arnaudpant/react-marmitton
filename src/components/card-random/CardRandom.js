import { useGlobalContext } from "../../context";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function CardRandom() {
    /// ========
    // STATE
    // =========

    const {
        dataRandomContext,
        addMealToFavoriteBarre,
        removeMealToFavoriteBarre,
        idInFavoris
    } = useGlobalContext();

    // ============
    // COMPORTEMENT
    // ============
    const likeUnlike = (arrIdInFavoris) => {
        if (dataRandomContext.idMeal.includes(Number(arrIdInFavoris))) {
            return <AiFillHeart />;
        } else {
            return <AiOutlineHeart />;
        }
    };

    const addOrRemove = (id) => {
        if (id.includes(Number(idInFavoris))) {
            return removeMealToFavoriteBarre(dataRandomContext);
        } else {
            return addMealToFavoriteBarre(dataRandomContext);
        }
    }


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
                            addOrRemove(dataRandomContext.idMeal)
                        }}
                    >
                        {likeUnlike(idInFavoris)}
                    </div>
                </div>
            )}
        </>
    );
}
