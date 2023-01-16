import React, { useContext, createContext, useEffect, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
    // STATE
    // ========

    const [dataRandomContext, setDataRanddomContext] = useState("");

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((res) => res.json())
            .then((res) => setDataRanddomContext(res.meals[0]));
    }, []);

    // COMPORTEMENT
    // ========

    // AFFICHAGE
    // ========
    return (
        <AppContext.Provider value={{ dataRandomContext }}>
            {children}
        </AppContext.Provider>
    );
};

// Creation d'un hook personnalisé pour passer le contexte
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
