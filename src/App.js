import React from "react";
import { useGlobalContext } from "./context";
import CardRandom from "./components/card-random/CardRandom";
import FavoriteBarre from "./components/favorisBar/FavoriteBarre";
import CardsByLetter from "./components/cards-by-letters/CardsByLetter";
import SearchBar from "./components/SearchBar/SearchBar";
import MenuAffiche from "./components/menuAffiche/MenuAffiche";
import "./styles/styles.css";
import TitleBar from "./components/titleBar/TitleBar";
import Footer from "./components/footer/Footer";

function App() {
    /// ========
    // STATE
    // =========
    const { listFavorisMeals, menuAffiche, dataByLetter, searchLetter } =
        useGlobalContext();

    // ============
    // COMPORTEMENT
    // ============

    // =========
    // AFFICHAGE
    // =========
    return (
        <>
            <TitleBar />

            {listFavorisMeals.length > 0 && <FavoriteBarre />}

            {menuAffiche !== "" ? (
                <MenuAffiche />
            ) : (
                <div
                    className={
                        listFavorisMeals.length > 0
                            ? "container container-favorite"
                            : "container"
                    }
                >
                    <CardRandom />

                    <SearchBar />

                    {dataByLetter != null ? (
                        <CardsByLetter />
                    ) : (
                        <div className="msg-error">
                            Pas de menu avec la lettre{" "}
                            {searchLetter.toUpperCase()} !<br />
                            Essayez avec une autre lettre
                        </div>
                    )}

                    <Footer />
                </div>
            )}
        </>
    );
}

export default App;
