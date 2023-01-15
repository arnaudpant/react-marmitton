import { useGlobalContext } from "../../context";
import { TfiYoutube } from "react-icons/tfi";
import { AiOutlineHeart } from "react-icons/ai";

const Menu = ({ menuSelect, menuClick }) => {
    // State
    const { dataRandomContext } = useGlobalContext();

    //Comportement

    // Affichage
    return (
        <>
            {menuSelect === "menuRandom" ? (
                <div className="container-menu" onClick={() => menuClick("")}>
                    <div className="container-titre">
                        <h1 className="menu-h1">Menu</h1>
                        <div className="logo-like-titre">
                            <AiOutlineHeart />
                        </div>
                    </div>
                    <p className="p-menu">{dataRandomContext.strMeal}</p>
                    <div className="box-img-ingredient">
                        <img
                            src={dataRandomContext.strMealThumb}
                            alt={dataRandomContext.strMeal}
                        ></img>
                        <div className="ingredients-list">
                            {dataRandomContext.strInstructions
                                .split(".")
                                .map((phrase) => (
                                    <p key={phrase.id}>{phrase}</p>
                                ))}
                        </div>
                    </div>
                    <div className="link-video">
                        <a href={dataRandomContext.strYoutube}>
                            <TfiYoutube />
                        </a>
                    </div>
                </div>
            ) : (
                <div className="container-menu" onClick={() => menuClick("")}>
                    <h1 className="menu-h1">Menu</h1>
                    <p className="p-menu">{menuSelect[0].strMeal}</p>
                    <div className="box-img-ingredient">
                        <img
                            src={menuSelect[0].strMealThumb}
                            alt={menuSelect[0].strMeal}
                        ></img>
                        <div className="ingredients-list">
                            {menuSelect[0].strInstructions
                                .split(".")
                                .map((phrase) => (
                                    <p>{phrase}</p>
                                ))}
                        </div>
                    </div>
                    <div className="link-video">
                        <a href={dataRandomContext.strYoutube}>
                            <TfiYoutube />
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Menu;
