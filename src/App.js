import React, { useEffect, useState } from "react";
import AppBar from "./components/Appbar/AppBar";
import ContainerCards from "./components/container-cards/ContainerCards";
import ContainerCardRandom from "./components/container-cards/ContainerCardRandom";
import Menu from "./components/menu/Menu";
import "./styles/styles.css";

function App() {
    // === STATES ===

    const [data, setData] = useState([]);
    const [searchLetter, setSearchLetter] = useState("c");
    const [dataRandom, setDataRandom] = useState("");
    const [menuSelect, setMenuSelect] = useState("");

    // === COMPORTEMENT ===

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((res) => res.json())
            .then((res) => setDataRandom(res.meals[0]));
    }, [data]);

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
            ? setMenuSelect(data.filter((menu) => menu.idMeal === id))
            : setMenuSelect("");
    };

    return (
        <>
            <AppBar />

            <div className="container">
                {menuSelect === "" && (
                    <ContainerCardRandom menuRandom={dataRandom} menuClick={menuClick}/>
                )}

                {menuSelect === "" && (
                    <div className="searchbar">
                        <input
                            type="search"
                            id="site-search"
                            placeholder="Tapez la première lettre"
                            maxLength={1}
                            onChange={(e) =>
                                e.target.value === ""
                                    ? setSearchLetter("c")
                                    : affichageMenus(e.target.value)
                            }
                        ></input>
                    </div>
                )}

                {menuSelect === "" ? (
                    data !== null ? (
                        <ContainerCards
                            searchLetter={searchLetter}
                            data={data}
                            menuClick={menuClick}
                        />
                    ) : (
                        <div className="msg-error">Pas de menu avec la lettre {searchLetter.toUpperCase()} !<br />Essayez avec une autre lettre</div>
                    )
                ) : (
                    
                        <Menu menuSelect={menuSelect} menuClick={menuClick} />
                    
                    
                )}
            </div>
        </>
    );
}

export default App;
