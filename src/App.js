import React from "react";
import { useGlobalContext } from "./context";

import AppBar from "./components/appBar/AppBar";
import CardRandom from "./components/card-random/CardRandom";

import "./styles/styles.css";
import FavoriteBarre from "./components/favorisBar/FavoriteBarre";
import CardsByLetter from "./components/cards-by-letters/CardsByLetter";
import SearchBar from "./components/SearchBar/SearchBar";
import MenuAffiche from "./components/menuAffiche/MenuAffiche";

function App() {
    /// ========
    // STATE
    // =========
    const { listFavorisMeals, menuAffiche } = useGlobalContext();





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

            {menuAffiche !== "" ?
                <MenuAffiche />
                :
            <div
                className={
                    listFavorisMeals.length > 0
                        ? "container container-favorite"
                        : "container"
                }
            >
                <CardRandom />

                <SearchBar />

                <CardsByLetter />
            </div>

        }
        </>
    );
}

export default App;
