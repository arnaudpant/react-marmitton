import axios from "axios";
import React, { useEffect, useState } from "react";
import CardMeals from "../cardMeal/CardMeals";
// import {searchLetter} from "../Appbar/AppBar"

const ContainerCards = () => {
    // State
    const [data, setData] = useState([]);
    const [searchLetter, setSearchLetter] = useState("c");
    const [posY, setPosY] = useState(24);
    const [dataRandom, setDataRandom] = useState("");

    // Comportement
    useEffect(() => {
        axios
            .get(
                `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter}`
            )
            .then((res) => setData(res.data.meals));
    }, [searchLetter]);

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((res) => setDataRandom(res.data.meals[0]));
    }, []);

    const positionY = (pos) => {
        setPosY(pos - 190);
    };

    const affichageMenus = (inputModif) => {
        setSearchLetter(inputModif);
    };

    // Affichage
    return (
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
            {searchLetter === "c" ? (
                <>
                    <h2 className="idee-jour">Idée du jour</h2>
                    <div className="container-cards">
                        <CardMeals meals={dataRandom} />
                    </div>
                </>
            ) : (
                ""
            )}
            <h3 className="idee-jour">{`Plats commencant par ${searchLetter.toUpperCase()}`}</h3>
            <div
                className="container-cards"
                onClick={(e) => positionY(e.pageY)}
            >
                {data.map((meal) => (
                    <CardMeals
                        id={meal.idMeal}
                        meals={meal}
                        positionClick={posY}
                    />
                ))}
            </div>
        </div>
    );
};

export default ContainerCards;
