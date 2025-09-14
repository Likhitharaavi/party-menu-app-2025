import React, { useState } from "react";
import { dishes } from "../data/mockDishes";
import DishCard from "../components/DishCard";
import Filters from "../components/Filters";

const MenuPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const filteredDishes =
    selectedFilter === "ALL"
      ? dishes
      : dishes.filter((dish) => dish.mealType === selectedFilter);

  return (
    <div>
      <h1>Party Menu</h1>
      <Filters
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
      <div className="menu-grid">
        {filteredDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
