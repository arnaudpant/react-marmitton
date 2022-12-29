import React, { useEffect, useState } from "react";
import AppBar from "./components/Appbar/AppBar";
import ContainerCards from "./components/container-cards/ContainerCards";
import ContainerCardRandom from "./components/container-cards/ContainerCardRandom";
import "./styles/styles.css";

function App() {
    // === STATES ===

    const [data, setData] = useState([]);
    const [searchLetter, setSearchLetter] = useState("c");
    const [dataRandom, setDataRandom] = useState("");

    // === COMPORTEMENT ===

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((res) => res.json())
            .then((res) => setDataRandom(res.meals[0]));
    }, []);

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

    return (
        <>
            <AppBar />

            <div className="container">
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

                <ContainerCardRandom menuRandom={dataRandom} />
            </div>

            <ContainerCards />
        </>
    );
}

export default App;
