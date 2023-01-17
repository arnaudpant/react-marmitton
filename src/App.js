import React from "react";
import { useGlobalContext } from "./context";

import AppBar from "./components/appBar/AppBar";
import CardRandom from "./components/card-random/CardRandom";

import "./styles/styles.css";
import FavoriteBarre from "./components/favorisBar/FavoriteBarre";

function App() {
    /// ========
    // STATE
    // =========
    const { listFavorisMeals } = useGlobalContext();





    // ============
    // COMPORTEMENT
    // ============




    
    // =========
    // AFFICHAGE
    // =========
    return (
        <>
            <AppBar />

            {listFavorisMeals.length > 0 && <FavoriteBarre />}

            <div
                className={
                    listFavorisMeals.length > 0
                        ? "container container-favorite"
                        : "container"
                }
            >
                <CardRandom />
            </div>
        </>
    );
}

export default App;
