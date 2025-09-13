import React, { useState } from "react";
import { dishes } from "./data/mockDishes";
import Filters from "./components/Filters";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("STARTER");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [currentDish, setCurrentDish] = useState(null);

  
  const filteredDishes = dishes.filter((dish) => {
    return (
      dish.mealType === selectedCategory &&
      dish.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!vegOnly || dish.type === "VEG")
    );
  });

  
  const handleAddDish = (id) => setSelectedDishes([...selectedDishes, id]);
  const handleRemoveDish = (id) => setSelectedDishes(selectedDishes.filter((dishId) => dishId !== id));

  return (
    <div className="app-container">
      <h1>Party Menu Selection</h1>

      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegOnly={vegOnly}
        onVegOnlyChange={setVegOnly}
      />

      <DishList
        dishes={filteredDishes}
        selectedDishes={selectedDishes}
        onAddDish={handleAddDish}
        onRemoveDish={handleRemoveDish}
        onViewIngredients={setCurrentDish}
      />

      
      <IngredientModal dish={currentDish} onClose={() => setCurrentDish(null)} />

      
      <div className="summary">
        <h2>Selected Dishes: {selectedDishes.length}</h2>
      </div>
    </div>
  );
}

export default App;