import { useGlobalContext } from "../../context";
import {AiOutlineHeart} from 'react-icons/ai';

export default function ContainerCardRandom({ menuClick }) {
    // State
    const {dataRandomContext, addFavorite} = useGlobalContext();

    // Comportement

    return (
        <>
            {dataRandomContext && (
                <div
                    className="container-card-random"
                    onClick={() => menuClick("menuRandom")}
                >
                    <div className="card-random__img">
                        <img
                            src={dataRandomContext.strMealThumb}
                            alt={dataRandomContext.strMeal}
                        ></img>
                    </div>
                    <div className="card-random__text">
                        <p className="idee-jour">Idée du jour</p>
                        <h1>{dataRandomContext.strMeal}</h1>
                        <h3>Pays: {dataRandomContext.strArea}</h3>
                        <p>Catégorie: {dataRandomContext.strCategory}</p>
                    </div>
                    <div
                    className="logo-like"
                    onClick={(e) => {
                        e.stopPropagation();
                        addFavorite(dataRandomContext);
                    }}
                >
                    <AiOutlineHeart />
                </div>
                </div>
            )}
        </>
    );
}
