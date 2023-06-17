import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import * as AnimateAble from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setUserName } from '../slices/profileSlice';
const OnBoardingScreen1 = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [name, setName] = React.useState('')
  const navigateScreen = () => {
    dispatch(setUserName(name))
    navigation.navigate('OnBoarding2')
  }
  return (
    <SafeAreaView className='flex-1 bg-background1'>
      <View className='flex-1  items-center'>
        <View className='flex mt-7 w-[90%] mx-[5%]'>
          <Text className='text-3xl font-semibold text-white capitalize text-center'>Tell About Yourself </Text>
          <Text className='text-[#DDD9D6]  text-center mt-3'>Please select your info this helps us to create a personalized plan.</Text>
        </View>

        <View className='flex-1 mb-8 bg-[#262450] shadow-sm mt-10 rounded-sm w-[90%] mx-[5%]'>
          <AnimateAble.View iterationCount={1} animation='fadeIn' className='flex-1 justify-center'>

            <View className='mt-9 flex justify-center w-[90%] mx-[5%]'>
              <TextInput value={name} onChangeText={(value) => { setName(value) }} style={{ outline: 'none' }} className='mt-4 flex-1 px-1 py-2 border-[#0da6c2] w-[60%] ml-[20%] text-center font-bold text-2xl text-white border-b-2' placeholder='Your Name' placeholderTextColor='#7b78aa'
              ></TextInput>
            </View>

          </AnimateAble.View>
          <TouchableOpacity className='w-[90%] mx-[5%] mb-7 rounded-2xl bg-[#0DA6C2]  justify-self-end mt-5 py-4 align-end' onPress={navigateScreen}><Text className='text-white text-xl font-bold text-center'>Next</Text></TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default OnBoardingScreen1