import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import AppBar from "./components/Appbar/AppBar";
import ContainerCards from "./components/container-cards/ContainerCards";

function App() {
    const [data, setData] = useState([]);
    const [searchLetter, setSearchLetter] = useState("c");
    const [dataRandom, setDataRandom] = useState("");

    // Comportement
    useEffect(() => {
        fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter}`
        )
            .then((res) => res.json())
            .then((res) => setData(res.meals));
    }, [searchLetter]);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((res) => res.json())
            .then((res) => setDataRandom(res.meals[0]));
    }, []);

    const affichageMenus = (inputModif) => {
        setSearchLetter(inputModif);
    };

    return (
        <>
            <AppBar />

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

            <ContainerCards />
        </>
    );
}

export default App;
