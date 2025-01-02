import React, { useState } from 'react';

function DishForm({ addDishOpen, onAddDish }) {
    const [dishName, setDishName] = useState('');
    const [ingredients, setIngredients] = useState('');

    const handleNameChange = (e) => {
        setDishName(e.target.value);
    };

    const handleIngredientsChange = (e) => {
        setIngredients(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dishName && ingredients) {
            const ingredientList = ingredients.split(',').map((ingredient) => ingredient.trim());
            onAddDish({ dishName, ingredients: ingredientList });
            setDishName('');
            setIngredients('');
        }
    };

    return (
        addDishOpen && (
            <form onSubmit={handleSubmit} className="m-5">
                <div>
                    <label htmlFor="name" className="block mb-2">Dish Name</label>
                    <input
                        type="text"
                        id="name"
                        value={dishName}
                        onChange={handleNameChange}
                        className="block p-2 mb-4 w-full rounded-lg bg-black"
                        placeholder="Dish name"
                    />
                </div>
                <div>
                    <label htmlFor="ingredients" className="block mb-2">Ingredients (comma separated)</label>
                    <input
                        type="text"
                        id="ingredients"
                        value={ingredients}
                        onChange={handleIngredientsChange}
                        className="block p-2 mb-4 w-full rounded-lg bg-black"
                        placeholder="Ingredient1, Ingredient2"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
                    Add Dish
                </button>
            </form>
        )
    );
}

export default DishForm;
