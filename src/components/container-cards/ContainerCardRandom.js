

export default function ContainerCardRandom({ menuRandom }) {
    // State


    // Comportement


    
    return (
        <div className="container-card-random">
            
            <h1>{menuRandom.strMeal}</h1>
            <h3>Pays: {menuRandom.strArea}</h3>
            <p>Catégorie: {menuRandom.strCategory}</p>

            <div className="card-random-notice">
                <img
                    src={`${menuRandom.strMealThumb}/preview`}
                    alt={menuRandom.strMeal}
                ></img>
            </div>
        </div>
    );
}
