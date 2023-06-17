import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  savedMeals: [],

}

export const savedMealSlice = createSlice({
  name: 'savedMeals',
  initialState,
  reducers: {
    addMeal: (state, action) => {
      state.savedMeals.push(action.payload)
    },
    removeMeal: (state, action) => {
      const index = state.savedMeals.findIndex((meal) => meal.id === action.payload.id);
      let updatedMeals = [...state.savedMeals]
      updatedMeals.splice(index, 1)
      state.savedMeals = updatedMeals
    }

  },
})


export const { addMeal, removeMeal } = savedMealSlice.actions


export const savedMeals = (state) => state.savedMeal.savedMeals;
export default savedMealSlice.reducer