import axios from "axios";
import React, { useEffect, useState } from "react";
import CardMeals from "../cardMeal/CardMeals";

const ContainerCards = () => {
    // State
    const [data, setData] = useState([]);

    // Comportement
    useEffect(() => {
        axios
            .get(
                "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
            )
            .then((res) => setData(res.data.meals));
    }, []);


    // Affichage
    return (
        <div className="container-cards">
            {
                data.map((meal) => (
                    <CardMeals id={meal.idMeal} meals={meal}/>
                ))
            }
        </div>

        
        )
};

export default ContainerCards;
