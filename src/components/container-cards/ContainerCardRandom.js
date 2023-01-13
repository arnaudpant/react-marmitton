import { useGlobalContext } from "../../context";

export default function ContainerCardRandom({ menuClick }) {
    // State
    const dataContext = useGlobalContext();

    // Comportement

    return (
        <>
            {dataContext && (
                <div
                    className="container-card-random"
                    onClick={() => menuClick("menuRandom")}
                >
                    <div className="card-random__img">
                        <img
                            src={dataContext.strMealThumb}
                            alt={dataContext.strMeal}
                        ></img>
                    </div>
                    <div className="card-random__text">
                        <p className="idee-jour">Idée du jour</p>
                        <h1>{dataContext.strMeal}</h1>
                        <h3>Pays: {dataContext.strArea}</h3>
                        <p>Catégorie: {dataContext.strCategory}</p>
                    </div>
                </div>
            )}
        </>
    );
}
