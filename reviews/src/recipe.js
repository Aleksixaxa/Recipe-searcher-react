import './recipe.css'
import React from 'react'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className="recipe">
            <h1 className="title">{title}</h1>
            <img src={image} alt=""/>
            <p>{Math.floor(calories)} Calories</p>
            <ul>{ingredients.map(ing => (
                <li>{ing.text}</li>
            ))}</ul>
        </div>
        );
}

export default Recipe