import React from "react";
// import { useGlobalContext } from "./context";

import AppBar from "./components/Appbar/AppBar";
import CardRandom from "./components/card-random/CardRandom";

import "./styles/styles.css";

function App() {
    // === STATES ===

    // === COMPORTEMENT ===

    // AFFICHAGE
    return (
        <>
            <AppBar />

            <div className="container">
                <CardRandom />
            </div>
        </>
    );
}

export default App;
