import { configureStore } from '@reduxjs/toolkit'
import mealReducer from '../slices/mealSlice'
import favMealReducer from '../slices/favouriteMealSlice'
import savedMealSlice from '../slices/savedMealSlice'
import workoutsSlice from '../slices/workoutsSlice'
import profileSlice from '../slices/profileSlice'

 const store = configureStore({
   reducer: {
     meal: mealReducer,
     favMeal: favMealReducer,
     savedMeal: savedMealSlice,
     workouts: workoutsSlice,
     profileData: profileSlice
      
   },
 })

 export default store