export const dishes = [
  {
    id: 1,
    name: "Puttagodugula Pachimirchi Fry",
    mealType: "STARTER",
    type: "VEG",
    description: "Spicy fry made with mushrooms and green chillies.",
    image:"https://www.sharmispassions.com/wp-content/uploads/2014/12/MushroomFry3.jpg" ,
    categoryId: 1,
    dishType: "FRY",
    ingredients: [
      { name: "Mushrooms", quantity: "200g" },
      { name: "Green Chillies", quantity: "5" },
      { name: "Onions", quantity: "1 large" },
      { name: "Oil", quantity: "2 tbsp" }
    ]
  },
  {
    id: 2,
    name: "Corn Fry",
    mealType: "STARTER",
    type: "VEG",
    description: "Crispy fried sweet corn tossed with spices.",
    image: "https://rakskitchen.net/wp-content/uploads/2022/01/crispy-corn-restaurant-style.jpg",
    categoryId: 1,
    dishType: "FRY",
    ingredients: [
      { name: "Sweet Corn", quantity: "1 cup" },
      { name: "Cornflour", quantity: "2 tbsp" },
      { name: "Chilli Powder", quantity: "1 tsp" },
      { name: "Oil", quantity: "for frying" }
    ]
  },
  {
    id: 3,
    name: "Chicken 65",
    mealType: "STARTER",
    type: "NON-VEG",
    description: "Spicy and crispy deep-fried chicken starter.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjj4IToB1rYOK7gZVizwWtX6PAJvi9oXPprDzNYG_h8RrKVvEHhqLFb_mrim2oCB4M2cDKIOxC5KyoM4NZDrQKxoI4nbXmchD1qc8wBCXgJPADhwke1ZCkWu6MLDlj8okEwOurD-PDQaZs/w691-h484/chicken+65+4.JPG",
    categoryId: 1,
    dishType: "FRY",
    ingredients: [
      { name: "Chicken", quantity: "300g" },
      { name: "Cornflour", quantity: "2 tbsp" },
      { name: "Curd", quantity: "3 tbsp" },
      { name: "Spices", quantity: "to taste" }
    ]
  },
  {
    id: 4,
    name: "Paneer Butter Masala",
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes simmered in creamy tomato gravy.",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2-500x500.jpg",
    categoryId: 2,
    dishType: "CURRY",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Tomatoes", quantity: "3" },
      { name: "Cream", quantity: "2 tbsp" },
      { name: "Butter", quantity: "1 tbsp" }
    ]
  },
  {
    id: 5,
    name: "Chicken Biryani",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    description: "Fragrant basmati rice cooked with chicken and spices.",
    image: "https://tiffinandteaofficial.com/wp-content/uploads/2024/05/IMG_7662-scaled.jpg",
    categoryId: 2,
    dishType: "BIRYANI",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Basmati Rice", quantity: "2 cups" },
      { name: "Onions", quantity: "2 large" },
      { name: "Spices", quantity: "to taste" }
    ]
  },
  {
    id: 6,
    name: "Veg Biryani",
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Flavorful rice cooked with mixed vegetables and spices.",
    image: "https://i.pinimg.com/1200x/53/0f/4c/530f4c3138de463f40940d6d2c31ec32.jpg",
    categoryId: 2,
    dishType: "BIRYANI",
    ingredients: [
      { name: "Basmati Rice", quantity: "2 cups" },
      { name: "Carrot", quantity: "1" },
      { name: "Beans", quantity: "10" },
      { name: "Spices", quantity: "to taste" }
    ]
  },
  {
    id: 7,
    name: "Gulab Jamun",
    mealType: "DESSERT",
    type: "VEG",
    description: "Soft milk-based balls soaked in sugar syrup.",
    image: "https://talodfoods.com/cdn/shop/files/Gulab-Jamun-Creative_img_4f2bd570-4f11-4dba-8386-fa5a26392cd0.webp?v=1725262395&width=1500",
    categoryId: 3,
    dishType: "SWEET",
    ingredients: [
      { name: "Khoa", quantity: "200g" },
      { name: "Flour", quantity: "2 tbsp" },
      { name: "Sugar Syrup", quantity: "1 cup" }
    ]
  },
  {
    id: 8,
    name: "Ice Cream",
    mealType: "DESSERT",
    type: "VEG",
    description: "Cold and creamy dessert in different flavors.",
    image: "https://www.citypng.com/public/uploads/preview/three-ice-cream-scoops-in-a-ceramic-bowl-image-png-704081694862512fewepz3sht.png",
    categoryId: 3,
    dishType: "SWEET",
    ingredients: [
      { name: "Milk", quantity: "500ml" },
      { name: "Sugar", quantity: "100g" },
      { name: "Flavoring", quantity: "Vanilla / Chocolate" }
    ]
  }
];
