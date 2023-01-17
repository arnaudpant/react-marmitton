import React, { useContext, createContext, useEffect, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
    // ========
    // STATE
    // ========

    const [dataRandomContext, setDataRanddomContext] = useState("");

    const [listFavorisMeals, setListFavorisMeals] = useState([]);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((res) => res.json())
            .then((res) => setDataRanddomContext(res.meals[0]));
    }, []);





    // ============
    // COMPORTEMENT
    // ============

    const addMealToFavoriteBarre = (meal) => {
        meal.favori = true;
        const addToFavorite = [...listFavorisMeals, meal];
        console.log(addToFavorite);
        return setListFavorisMeals(addToFavorite)
    };


    const removeMealToFavoriteBarre = (mealId) => {
        const updateFavorite = listFavorisMeals.filter((meal)=> meal.idMeal !== mealId );
        return setListFavorisMeals(updateFavorite);
    }




    // =========
    // AFFICHAGE
    // =========
    return (
        <AppContext.Provider value={{ listFavorisMeals, addMealToFavoriteBarre, removeMealToFavoriteBarre, dataRandomContext }}>
            {children}
        </AppContext.Provider>
    );
};

// Creation d'un hook personnalisé pour passer le contexte
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
