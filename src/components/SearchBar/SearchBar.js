import React from "react";
import { useGlobalContext } from "../../context";

const SearchBar = () => {
    /// ========
    // STATE
    // =========
    const {setSearchLetter, affichageMenus } = useGlobalContext();

    // ============
    // COMPORTEMENT
    // ============

    // =========
    // AFFICHAGE
    // =========

    return (
        <div className="searchbar">
            <input
                type="search"
                id="site-search"
                placeholder="Tapez la première lettre"
                maxLength={1}
                onChange={(e) =>
                    e.target.value === ""
                        ? setSearchLetter("")
                        : affichageMenus(e.target.value)
                }
            ></input>
        </div>
    );
};

export default SearchBar;
