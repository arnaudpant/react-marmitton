import axios from "axios";
import React, { useEffect, useState } from "react";
import CardMeals from "../cardMeal/CardMeals";
// import {searchLetter} from "../Appbar/AppBar"

const ContainerCards = () => {
    // State
    const [data, setData] = useState([]);
    const [searchLetter, setSearchLetter] = useState("a");

    // Comportement
    useEffect(() => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter}`)
            .then((res) => setData(res.data.meals));
    }, [searchLetter]);

    // Affichage
    return (
        <div className="container">
            <div className="searchbar">
                <input
                    type="search"
                    id="site-search"
                    placeholder="Tapez la première lettre"
                    onChange={
                        (e) => e.target.value === "" ?
                        setSearchLetter("a") :
                        setSearchLetter(e.target.value)}
                ></input>
            </div>

            <div className="container-cards">
                {data.map((meal) => (
                    <CardMeals id={meal.idMeal} meals={meal} />
                ))}
            </div>
        </div>
    );
};

export default ContainerCards;
