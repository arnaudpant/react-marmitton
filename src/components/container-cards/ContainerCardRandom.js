export default function ContainerCardRandom({ menuRandom, menuClick }) {
    // State

    // Comportement

    return (
        <div className="container-card-random" onClick={()=> menuClick(menuRandom.idMeal)}>
            <div className="card-random__img">
                <img
                    src={menuRandom.strMealThumb}
                    alt={menuRandom.strMeal}
                ></img>
            </div>
            <div className="card-random__text">
                <p className="idee-jour">Idée du jour</p>
                <h1>{menuRandom.strMeal}</h1>
                <h3>Pays: {menuRandom.strArea}</h3>
                <p>Catégorie: {menuRandom.strCategory}</p>
            </div>

        </div>
    );
}
