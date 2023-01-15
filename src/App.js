import React, { useEffect, useState } from "react";
import AppBar from "./components/Appbar/AppBar";
import FavoriteBarre from "./components/Favorite/FavoriteBarre";
import ContainerCards from "./components/container-cards/ContainerCards";
import ContainerCardRandom from "./components/container-cards/ContainerCardRandom";
import Menu from "./components/menu/Menu";
import { useGlobalContext } from "./context";
import "./styles/styles.css";

function App() {
    // === STATES ===

    const [data, setData] = useState([]);
    const [searchLetter, setSearchLetter] = useState(getRandomLetter);
    const [menuSelect, setMenuSelect] = useState("");
    const { favorite } = useGlobalContext();

    // === COMPORTEMENT ===

    function getRandomLetter() {
        const letters = "abcdefghijklmnoprstvwy";
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
    }

    useEffect(() => {
        fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter}`
        )
            .then((res) => res.json())
            .then((res) => setData(res.meals));
    }, [searchLetter]);

    const affichageMenus = (inputModif) => {
        setSearchLetter(inputModif);
    };

    const menuClick = (id) => {
        id !== ""
            ? id === "menuRandom"
                ? setMenuSelect("menuRandom")
                : setMenuSelect(data.filter((menu) => menu.idMeal === id))
            : setMenuSelect("");
    };

    const menuFavClick = (favMeal) => {
        setMenuSelect(favMeal);
    };

    // AFFICHAGE
    return (
        <>
            <AppBar />

            {favorite.length > 0 && (
                <FavoriteBarre menuFavoriteClick={menuFavClick} />
            )}

            <div
                className={
                    favorite.length > 0
                        ? "container container-favorite"
                        : "container"
                }
            >
                {/* Idée de menu */}
                {(menuSelect === "" || menuClick === "menuRandom") && (
                    <ContainerCardRandom menuClick={menuClick} />
                )}
                {/* SearchBar */}
                {(menuSelect === "" || menuClick === "menuRandom") && (
                    <div className="searchbar">
                        <input
                            type="search"
                            id="site-search"
                            placeholder="Tapez la première lettre"
                            maxLength={1}
                            onChange={(e) =>
                                e.target.value === ""
                                    ? setSearchLetter(searchLetter)
                                    : affichageMenus(e.target.value)
                            }
                        ></input>
                    </div>
                )}

                {/* Liste filtrée des plats ou menu detaillé */}
                {menuSelect === "" || menuClick === "menuRandom" ? (
                    data !== null ? (
                        <ContainerCards
                            searchLetter={searchLetter}
                            data={data}
                            menuClick={menuClick}
                        />
                    ) : (
                        <div className="msg-error">
                            Pas de menu avec la lettre{" "}
                            {searchLetter.toUpperCase()} !<br />
                            Essayez avec une autre lettre
                        </div>
                    )
                ) : (
                    <Menu menuSelect={menuSelect} menuClick={menuClick} />
                )}
            </div>
        </>
    );
}

export default App;
