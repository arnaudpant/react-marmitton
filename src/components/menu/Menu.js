import { useGlobalContext } from "../../context";

const Menu = ({ menuSelect, menuClick }) => {
    // State
    const dataContext = useGlobalContext();

    //Comportement
    console.log(menuSelect);

    // Affichage
    return (
        <>
            {menuSelect === "menuRandom" ? (
                <div className="container-menu" onClick={() => menuClick("")}>
                <h1 className="menu-h1">Menu</h1>
                <p className="p-menu">{dataContext.strMeal}</p>
                <div className="box-img-ingredient">
                    <img
                        src={dataContext.strMealThumb}
                        alt={dataContext.strMeal}
                    ></img>
                    <div className="ingredients-list">
                        {dataContext.strInstructions.split(".").map((phrase) => (
                            <p>{phrase}</p>
                        ))}
                    </div>
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
                </div>
            )}
        </>
    );
};

export default Menu;
