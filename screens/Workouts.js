import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import BtnGoBack from '../components/BtnGoBack'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { week1workouts } from '../slices/workoutsSlice'
import WorkOutCard from '../components/WorkOutCard'
import { useEffect } from 'react'



const Workouts = () => {
  const navigation = useNavigation();
  const workoutsWeek1 = useSelector(week1workouts)
  useEffect(() => {
    console.log(workoutsWeek1)
  }, [workoutsWeek1])
 

  return (
    <SafeAreaView className='flex-1 bg-background1'>
      <ScrollView>
        <View className='w-[90%] flex-1 mx-[5%] py-10'>
          <BtnGoBack />
          <Text className='text-white text-xl text-center font-semibold mb-2 mt-2'>Workout</Text>
          <Text className='text-white text-lg font-normal mb-2 mt-3'>Week 1</Text>
          <Text className='text-[#DDD9D6]'>Find your feet with an introductory Yoga flow and stretches, plus tips on building healthy habits. Begin the program with a full body training to keep your achievement to reach your goal.</Text>
          <View className='flex-1 mt-5 py-5 px-4 bg-[#262450] rounded-lg'>

            <View>
              {workoutsWeek1.map(workout => (
                <WorkOutCard key={workout.id} id={workout.id} name={workout.name} isdone={workout.isdone} time={workout.time} reps={workout.reps} day={workout.day} sets={workout.sets} />
              ))}

            </View>


          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

export default Workouts