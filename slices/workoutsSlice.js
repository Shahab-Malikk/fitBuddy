import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  week1: [
    {
      id: 'w1d1', day: '1', name: 'Jumping Jacks', isdone: false, time: 45, sets: 3, reps: 10, videoUrl: 'w01.mp4'
    }, {
      id: 'w1d2', day: '2', name: 'Pushups', isdone: false, time: 30, sets: 4, reps: 5, videoUrl: 'w02.mp4'
    },
    {
      id: 'w1d3', day: '3', name: 'Squats', isdone: false, time: 50, sets: 3, reps: 10, videoUrl: 'w03.mp4'
    },
    {
      id: 'w1d4', day: '4', name: 'Lunges', isdone: false, time: 45, sets: 3, reps: 10, videoUrl: 'w04.mp4'
    },
    {
      id: 'w1d5', day: '5', name: 'Plank', isdone: false, time: 45, sets: 3, reps: 10, videoUrl: 'w05.mp4'
    },
    {
      id: 'w1d6', day: '6', name: 'Crunches', isdone: false, time: 45, sets: 3, reps: 10, videoUrl: 'w06.mp4'
    }, {
      id: 'w1d7', day: '7', name: 'Burpees', isdone: false, time: 45, sets: 3, reps: 10, videoUrl: 'w02.mp4'
    }


  ],
  totalWoroutTime: 0,

}

export const workoutsSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    completeWorkout: (state, action) => {
      const index = state.week1.findIndex((workout) => workout.id === action.payload.id);
      let updatedWorkouts = [...state.week1]
      updatedWorkouts[index].isdone = true
      state.week1 = updatedWorkouts
    },
    setTotalTime: (state, action) => {
      state.totalWoroutTime = action.payload
    }


  },
})




export const { completeWorkout,setTotalTime } = workoutsSlice.actions
export const week1workouts = (state) => state.workouts.week1;
export const totalWorkoutTime = (state) => state.workouts.totalWoroutTime;
export default workoutsSlice.reducer