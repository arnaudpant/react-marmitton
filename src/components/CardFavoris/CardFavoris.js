import React from 'react';

const CardFavoris = ({favMeal}) => {
    console.log(favMeal);
    return (
        <div className='card-favori-img'>
            <img src={favMeal.strMealThumb} alt="" />
        </div>
    );
};

export default CardFavoris;