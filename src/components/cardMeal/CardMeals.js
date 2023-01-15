import { AiOutlineHeart } from "react-icons/ai";
import { useGlobalContext } from "../../context";

const CardMeals = ({ meals, menuClick }) => {
    // State

    // Comportement
    const { addFavorite } = useGlobalContext();

    // Afichage
    return (
        <>
            <div className="card-meal" onClick={() => menuClick(meals.idMeal)}>
                <div className="img-bkg">
                    <img src={meals.strMealThumb} alt="plat {meals.strMeal}" />
                </div>
                <h2>{meals.strMeal}</h2>
                <div
                    className="logo-like"
                    onClick={(e) => {
                        e.stopPropagation();
                        addFavorite(meals);
                    }}
                >
                    <AiOutlineHeart />
                </div>
            </div>
        </>
    );
};

export default CardMeals;
