import { createSlice } from '@reduxjs/toolkit'


const initialState = {
 favouriteMeals: [],

}

export const favMealSlice = createSlice({
  name: 'favMeal',
  initialState,
  reducers: {
    addFavMeal: (state, action) => {
      state.favouriteMeals.push(action.payload)
    },
    removeFavMeal: (state, action) => {
      const index = state.favouriteMeals.findIndex((meal) => meal.id === action.payload.id);
      let updatedMeals = [...state.favouriteMeals]
      updatedMeals.splice(index, 1)
      state.favouriteMeals = updatedMeals
    }

  },
})


export const { addFavMeal, removeFavMeal } = favMealSlice.actions


export const favouriteMeals = (state) => state.favMeal.favouriteMeals;
export default favMealSlice.reducer