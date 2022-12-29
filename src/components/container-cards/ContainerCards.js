import CardMeals from "../cardMeal/CardMeals";

const ContainerCards = ({ searchLetter, data, menuClick }) => {
    // State

    // Comportement

    // Affichage
    return (
        <>
            <h3 className="first-letter">{`Plats commencant par ${searchLetter.toUpperCase()}`}</h3>
            <div
                className="container-cards"
            >
                {data.map((meal) => (
                    <CardMeals
                        key={meal.idMeal}
                        meals={meal}
                        menuClick={menuClick}
                    />
                ))}
            </div>
        </>
    );
};

export default ContainerCards;
