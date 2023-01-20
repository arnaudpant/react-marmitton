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

    const [searchLetter, setSearchLetter] = useState(getRandomLetter);

    const [menuAffiche, setMenuAffiche] = useState("");

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
        // Pour affichage dans favori-barre
        const addToFavorite = [...listFavorisMeals, menuInFavori];
        setListFavorisMeals(addToFavorite);
        // Pour ajout des id dans array des favoris
        setIdInFavoris(addToFavorite.map(meal => meal.idMeal));
    };

    const removeMealToFavoriteBarre = (menuInFavori) => {
        // Pour affichage dans favori-barre
        const updateFavorite = listFavorisMeals.filter(
            (meal) => meal.idMeal !== menuInFavori.idMeal);
        setListFavorisMeals(updateFavorite);
            // Pour maj des id dans array des favoris
        setIdInFavoris(updateFavorite.map(meal => meal.idMeal));
    };
    
    const affichageMenus = (inputModif) => {
        setSearchLetter(inputModif);
    };
    

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
                searchLetter,
                setSearchLetter,
                dataByLetter,
                idInFavoris,
                affichageMenus,
                setMenuAffiche,
                menuAffiche
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
