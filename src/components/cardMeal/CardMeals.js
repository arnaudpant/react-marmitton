

const CardMeals = ({ meals, menuClick }) => {
    // State


    // Comportement


    // Afichage
    return (
        <>
            <div className="card-meal" onClick={()=> menuClick(meals.idMeal)}>
                <div className="img-bkg">
                    <img src={meals.strMealThumb} alt="plat {meals.strMeal}" />
                </div>
                <h2>{meals.strMeal}</h2>
            </div>
        </>
    );
};

export default CardMeals;
