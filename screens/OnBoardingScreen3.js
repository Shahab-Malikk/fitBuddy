import {
  View, Text, SafeAreaView, TouchableOpacity,
  KeyboardAvoidingView, ScrollView, TextInput, Platform
} from 'react-native'
import React from 'react'
import * as AnimateAble from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setWeightHeight } from '../slices/profileSlice';



const OnBoardingScreen3 = () => {
  const [weight, setWeight] = React.useState('')
  const [height, setHeight] = React.useState('')
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const navigateScreen = () => {
    dispatch(setWeightHeight({ weight: weight, height: height }))
    navigation.navigate('OnBoarding4')
  }
  return (
    <SafeAreaView className='flex-1 bg-background1'>
      <View className='flex-1  items-center'>
        <View className='flex mt-7 w-[90%] mx-[5%]'>
          <Text className='text-3xl font-semibold text-white capitalize text-center'>Tell About Yourself </Text>
          <Text className='text-[#DDD9D6]  text-center mt-3'>Please select your info this helps us to create a personalized plan.</Text>
        </View>

        <View className='flex-1 mb-8 bg-[#262450] shadow-sm mt-10 rounded-sm w-[90%] mx-[5%]'>
          <AnimateAble.View iterationCount={1} animation='fadeIn' className='flex-1'>
            <ScrollView>
              <KeyboardAvoidingView keyboardVerticalOffset={30} behavior={Platform.OS === "ios" ? "padding" : "height"} className=''>
                <View className='mt-5 w-[90%] mx-[5%]'>
                  <Text className='uppercase font-semibold text-lg text-white'>What's Your Weight ?</Text>
                  <Text className='text-white mt-3 text-xs'>You can always change it.</Text>

                  <TextInput value={weight} onChangeText={(value) => { setWeight(value) }} style={{ outline: 'none' }} className='mt-4 flex-1 px-1 py-2 border-[#0da6c2] font-semibold text-lg text-white border-b-2' placeholder='Enter Your Weight in KGs' placeholderTextColor='#7b78aa'
                  ></TextInput>
                </View>
                <View className='mt-9 w-[90%] mx-[5%]'>
                  <Text className='uppercase font-semibold text-lg text-white'>What's Your Height ?</Text>
                  <Text className='text-white mt-3 text-xs'>You can always change it.</Text>
                  <TextInput value={height} onChangeText={(value) => {
                    setHeight(value)
                  }} keyboardType={'phone-pad'} style={{ outline: 'none' }} className='mt-4 flex-1 px-1 py-2 border-[#0da6c2] font-semibold text-lg text-white border-b-2' placeholder='Enter Your Height in cms' placeholderTextColor='#7b78aa'
                  ></TextInput>
                </View>
              </KeyboardAvoidingView>
            </ScrollView>
          </AnimateAble.View>
          <TouchableOpacity className='w-[90%] mx-[5%] mb-7 rounded-2xl bg-[#0DA6C2]  justify-self-end mt-5 py-4 align-end' onPress={navigateScreen}><Text className='text-white text-xl font-bold text-center'>Next</Text></TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default OnBoardingScreen3