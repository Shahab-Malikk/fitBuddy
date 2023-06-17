import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  personData: [
    {
      name: null,
      gender: null,
      weight: null,
      height: null,
      goals: null,
    }
  ],

}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.personData[0].name = action.payload
    },
    setGender: (state, action) => {
      state.personData[0].gender = action.payload
    },
    setWeightHeight: (state, action) => {
      state.personData[0].weight = action.payload.weight
      state.personData[0].height = action.payload.height
    },
    setGoals: (state, action) => {
      state.personData[0].goals = action.payload
    }

  },
})


export const { setUserName,setGender,setWeightHeight,setGoals } = profileSlice.actions

export const profileData = (state) => state.profileData.personData;
export default profileSlice.reducer