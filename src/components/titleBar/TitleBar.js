import React from "react";
import { GiFoodTruck } from "react-icons/gi";

const TitleBar = () => {
    return (
        <div className="title-bar">
            <div className="title-bar__logo">
                <GiFoodTruck />
            </div>
            <h1 className="title-bar__title">React Marmitton</h1>
        </div>
    );
};

export default TitleBar;
