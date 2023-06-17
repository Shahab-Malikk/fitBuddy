import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  meals: [
    {
      id:'bm1', type: 'breakfast', category: 'low fat', name: 'Oatmeal with fruits',
      imgUrl: 'bm6.jpg'

    },
    {
      id:'bm2',type: 'breakfast', category: 'high protein', name: 'Egg and avocado toast',
      imgUrl: 'bm1.jpg'
    },
    {
      id: 'lm1', type: 'lunch', category: 'low carb', name: 'Grilled chicken salad',
      imgUrl: 'lm1.jpg'
    },
    {
      id: 'lm2', type: 'lunch', category: 'vegetarian', name: 'Quinoa and vegetable stir-fry',
      imgUrl: 'lm2.jpg'
    },
    {
      id: 'dm1', type: 'dinner', category: 'keto', name: 'Salmon with roasted vegetables',
      imgUrl: 'dm1.jpg'
    },
    {
      id: 'dm2', type: 'dinner', category: 'gluten-free', name: 'Zucchini noodles with marinara sauce',
      imgUrl: 'dm2.jpg'
    },
    // Add more meals here
    {
      id: 'bm3', type: 'breakfast', category: 'low fat', name: 'Greek yogurt with berries',
      imgUrl: 'bm2.jpg'
    },
    {
      id: 'bm4', type: 'breakfast', category: 'high protein', name: 'Protein pancakes with nut butter',
      imgUrl: 'bm3.jpg'
    },
    {
      id: 'lm3', type: 'lunch', category: 'low carb', name: 'Cauliflower rice with grilled shrimp',
      imgUrl: 'lm3.jpg'
    },
    {
      id: 'lm4', type: 'lunch', category: 'vegetarian', name: 'Mediterranean quinoa salad',
      imgUrl: 'lm4.jpg'
    },
    {
      id: 'dm3', type: 'dinner', category: 'keto', name: 'Steak with cauliflower mash',
      imgUrl: 'dm3.png'
    },
    {
      id: 'dm4', type: 'dinner', category: 'gluten-free', name: 'Stuffed bell peppers with ground turkey',
      imgUrl: 'dm4.jpg'
    },
    // Add more meals here
    {
      id: 'bm5', type: 'breakfast', category: 'low fat', name: 'Fruit smoothie with spinach',
      imgUrl: 'bm4.jpg'
    },
    {
      id: 'bm6', type: 'breakfast', category: 'high protein', name: 'Smoked salmon and cream cheese bagel',
      imgUrl: 'bm5.jpg'
    },
    {
      id: 'lm5', type: 'lunch', category: 'low carb', name: 'Zucchini noodles with pesto and cherry tomatoes',
      imgUrl: 'lm5.jpg'
    },
    {
      id: 'lm6', type: 'lunch', category: 'vegetarian', name: 'Black bean and corn quesadilla',
      imgUrl: 'lm6.jpeg'
    },
    {
      id: 'dm5', type: 'dinner', category: 'keto', name: 'Chicken curry with cauliflower rice',
      imgUrl: 'dm5.jpg'
    },
    {
      id: 'dm6', type: 'dinner', category: 'gluten-free', name: 'Baked lemon herb chicken with roasted potatoes',
      imgUrl: 'dm6.jpg'
    },
  ]

}

export const mealSlice = createSlice({
  name: 'meal',
  initialState,
  reducers: {

  },
})
//Meals Caetgories
export const lowFatMeals = (state) => state.meal.meals.filter((meal) => meal.category === 'low fat');
export const highProteinMeals = (state) => state.meal.meals.filter((meal) => meal.category === 'high protein');
export const lowCarbMeals = (state) => state.meal.meals.filter((meal) => meal.category === 'low carb');
export const vegetarianMeals = (state) => state.meal.meals.filter((meal) => meal.category === 'vegetarian');
export const ketoMeals = (state) => state.meal.meals.filter((meal) => meal.category === 'keto');
export const glutenFreeMeals = (state) => state.meal.meals.filter((meal) => meal.category === 'gluten-free');


// Action creators are generated for each case reducer function
export const breakFastMeals = (state) => state.meal.meals.filter((meal) => meal.type === 'breakfast');
export const lunchMeals = (state) => state.meal.meals.filter((meal) => meal.type === 'lunch');
export const dinnerMeals = (state) => state.meal.meals.filter((meal) => meal.type === 'dinner');
export const meals = (state) => state.meal.meals;
export default mealSlice.reducer