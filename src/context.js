import React, { useContext, createContext, useEffect, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
    // ========
    // STATE
    // ========

    const [dataRandomContext, setDataRanddomContext] = useState("");
    const [dataByLetter, setDataByLetter] = useState([]);

    const [listFavorisMeals, setListFavorisMeals] = useState([]);
    const [idInFavoris, setIdInFavoris] = useState([]);
    const [idMealDeleted, setIdMealDeleted] = useState();

    const [searchLetter, setSearchLetter] = useState(getRandomLetter);

    /* 
    *** APPELS API
    */
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((res) => res.json())
            .then((res) => setDataRanddomContext(res.meals[0]));
    }, []);

    useEffect(() => {
        fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter}`
        )
            .then((res) => res.json())
            .then((res) => setDataByLetter(res.meals));
    }, [searchLetter]);


    // ============
    // COMPORTEMENT
    // ============

    function getRandomLetter() {
        const letters = "abcdefghijklmnoprstvwy";
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
    }

    const addMealToFavoriteBarre = (menuInFavori) => {
        const addToFavorite = [...listFavorisMeals, menuInFavori];
        setListFavorisMeals(addToFavorite);
        setIdInFavoris(addToFavorite.map(meal => meal.idMeal))
        setIdMealDeleted();
    };

    const removeMealToFavoriteBarre = (menuInFavori) => {
        const updateFavorite = listFavorisMeals.filter(
            (meal) => meal.idMeal !== menuInFavori.idMeal
        );
        setIdMealDeleted(menuInFavori.idMeal)
        setListFavorisMeals(updateFavorite);
        setIdInFavoris(updateFavorite.map(meal => meal.idMeal))
    };
    
    console.log(idInFavoris);
    // =========
    // AFFICHAGE
    // =========
    return (
        <AppContext.Provider
            value={{
                listFavorisMeals,
                addMealToFavoriteBarre,
                removeMealToFavoriteBarre,
                dataRandomContext,
                idMealDeleted,
                searchLetter,
                setSearchLetter,
                dataByLetter,
                idInFavoris
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// Creation d'un hook personnalisé pour passer le contexte
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
