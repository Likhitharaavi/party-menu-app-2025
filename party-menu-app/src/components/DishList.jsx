import React from "react";
import DishCard from "./DishCard";

function DishList({dishes,selectDishes,onAddDish,onRemoveDish,onViewIngredients}){
    return(
        <div className="dish-list">
            {dishes.map((dish)=>(
                <DishCard
                    key={dish.id}
                    dish={dish}
                    isSelected={selectedDishes.includes(dish.id)}
                    onAddDish={onAddDish}
                    onRemoveDish={onRemoveDish}
                    onViewIntegredients={onViewingredients}
                />
            ))}
        </div>
    );
}

export default DishList;