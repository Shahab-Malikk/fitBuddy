import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { week1workouts } from '../slices/workoutsSlice'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const WorkOutCard = (props) => {
  const navigation = useNavigation()



  const navigateToWorkout = () => {
    navigation.navigate('Workout',{id:props.id,name:props.name,time:props.time,reps:props.reps,isdone:props.isdone,sets:props.sets,day:props.day})
  }
  return (
    <TouchableOpacity onPress={navigateToWorkout} className='py-2 px-4 mb-4 bg-[#7B78AA] flex-row justify-between items-center rounded-lg border border-white'>
      <Image source={require(`../assets/workout.png`)} className='w-14 h-14' />
      <View className='flex-col w-[70%]'>
        <View className='flex-row justify-between'>
          <Text className='text-white text-lg font-semiold'>{props.name}</Text>
          <Icon name='check-circle' size={20} color={props.isdone ? '#0DA6C2' : '#fff'} />
        </View>
        
        <View className='flex-row justify-between'>
          <Text className='text-white text-sm font-thin'>{props.time} sec</Text>
          <Text className='text-white text-sm font-thin'>x{ props.reps}</Text>
        </View>
      </View>


    </TouchableOpacity>
  )
}

export default WorkOutCard