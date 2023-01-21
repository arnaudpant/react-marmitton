import { useGlobalContext } from "../../context";
import { TfiYoutube } from "react-icons/tfi";

const MenuAffiche = () => {
    /// ========
    // STATE
    // =========
    const { menuAffiche, setMenuAffiche } = useGlobalContext();

    // ============
    // COMPORTEMENT
    // ============

    // =========
    // AFFICHAGE
    // =========
    return (
        <div className="container-menu" onClick={()=> {setMenuAffiche("")}}>
            <h1 className="menu-h1">Menu</h1>
            <p className="p-menu">{menuAffiche.strMeal}</p>
            <div className="box-img-ingredient">
                <img
                    src={menuAffiche.strMealThumb}
                    alt={menuAffiche.strMeal}
                ></img>
                <div className="ingredients-list">
                    {menuAffiche.strInstructions.split(".").map((phrase) => (
                        <p>{phrase}</p>
                    ))}
                </div>
            </div>
            <div className="link-video">
                <a href={menuAffiche.strYoutube}>
                    <TfiYoutube />
                </a>
            </div>
        </div>
    );
};

export default MenuAffiche;
