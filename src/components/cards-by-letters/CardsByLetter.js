import { useGlobalContext } from "../../context";
import CardMeals from "../cards-meal/CardMeals";

const CardsByLetter = () => {
    // ========
    // STATE
    // ========

    const { searchLetter, dataByLetter } = useGlobalContext();

    // ============
    // COMPORTEMENT
    // ============




    
    // =========
    // AFFICHAGE
    // =========
    return (
        <>
            <h3 className="first-letter">{`Plats commencant par ${searchLetter.toUpperCase()}`}</h3>
            <div className="container-cards">
                {dataByLetter.map((meal) => (
                    <CardMeals
                        key={meal.idMeal}
                        meals={meal}
                        // menuClick={menuClick}
                    />
                ))}
            </div>
        </>
    );
};

export default CardsByLetter;
