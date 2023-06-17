import { View, Text, SafeAreaView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import BtnGoBack from '../components/BtnGoBack'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { totalWorkoutTime } from '../slices/workoutsSlice';
import { useEffect } from 'react';

const WorkoutsMainScreen = () => {
  const navigation = useNavigation();
  const totalTime = useSelector(totalWorkoutTime)
  useEffect(() => {
    console.log(totalTime)
  }, [totalTime])
  
  return (
    <SafeAreaView className='flex-1  bg-background1'>

      <View className='w-[90%] mx-[5%] py-10'>
        <BtnGoBack />
        <Text className='text-white text-xl font-semibold mb-2 mt-3'>Program Progress</Text>
        <Text className='text-[#DDD9D6] text-xs'>You'll Begin. The program with a full-body Training split. Meaning you'll train all major body parts in each workout.</Text>
        <View className='flex-1 mt-5'>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Workouts')
          }} className='py-2 px-4 bg-[#7B78AA] flex-row justify-between items-center rounded-lg border border-white'>
            <Image source={require(`../assets/sportFam.png`)} className='w-14 h-14' />
            <View className='flex-col w-[70%]'>
              <Text className='text-white text-lg font-semiold'>WEEK 1</Text>
              <Text className='text-white text-sm font-thin'>Find your Feet with an introductory yoga flow and stretches, plus Tips on Building healthy habits.</Text>
            </View>


          </TouchableOpacity>
        </View>
      </View>


    </SafeAreaView>
  )
}

export default WorkoutsMainScreen