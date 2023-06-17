import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements';
import * as AnimateAble from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setGoals } from '../slices/profileSlice';


const OnBoardingScreen4 = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleCheckboxToggle = (itemValue) => {
    if (selectedItems.includes(itemValue)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemValue));
    } else {
      setSelectedItems([...selectedItems, itemValue]);
    }
  };

  const navigateScreen = () => {
    dispatch(setGoals(selectedItems))
    navigation.navigate('OnCompletion')
  }

  console.log(selectedItems);
  return (
    <SafeAreaView className='flex-1 bg-background1'>
      <View className='flex-1  items-center'>
        <View className='flex mt-7 w-[90%] mx-[5%]'>
          <Text className='text-3xl font-semibold text-white capitalize text-center'>Tell About Yourself </Text>
          <Text className='text-[#DDD9D6]  text-center mt-3'>Please select your info this helps us to create a personalized plan.</Text>
        </View>

        <View className='flex-1 mb-8 bg-[#262450] shadow-sm mt-10 rounded-sm w-[90%] mx-[5%]'>
          <AnimateAble.View iterationCount={1} animation='fadeIn' className='flex-1'>
            <View className='mt-5 w-[90%] mx-[5%]'>
              <Text className='uppercase font-semibold text-2xl text-white'>What's Your Goal?</Text>
              <Text className='text-white mt-3 text-md'>This Helps us to create personalized plan.</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className='mt-5 w-[90%] mx-[5%]'>
                <View className='px-3 py-4 border border-[#979797] rounded-md mb-3'>
                  <CheckBox
                    title="Lose weight"
                    checked={selectedItems.includes('Lose weight')}
                    onPress={() => handleCheckboxToggle('Lose weight')}
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', marginLeft: 0, marginRight: 0, borderWidth: 0, margin: 0, padding: 0 }}
                    textStyle={{ flex: 1, color: '#ffffff', margin: 0, padding: 0, fontSize: 18 }}
                    iconRight
                    checkedColor='#00D7FF'
                  />
                  <Text className='text-[#979797] mt-1'>I have a healthy lifestyle and i want to stick to it.</Text>
                </View>
                <View className='px-3 py-4 border border-[#979797] rounded-md mb-3'>
                  <CheckBox
                    title="Gain Muscles"
                    checked={selectedItems.includes('Gain Muscles')}
                    onPress={() => handleCheckboxToggle('Gain Muscles')}
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', marginLeft: 0, marginRight: 0, borderWidth: 0, margin: 0, padding: 0 }}
                    textStyle={{ flex: 1, color: '#ffffff', margin: 0, padding: 0, fontSize: 18 }}
                    iconRight
                    checkedColor='#00D7FF'
                  />
                  <Text className='text-[#979797] mt-1'>I have a healthy lifestyle and i want to stick to it.</Text>
                </View>
                <View className='px-3 py-4 border border-[#979797] rounded-md mb-3'>
                  <CheckBox
                    title="Keep Fit"
                    checked={selectedItems.includes('Keep Fit')}
                    onPress={() => handleCheckboxToggle('Keep Fit')}
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', marginLeft: 0, marginRight: 0, borderWidth: 0, margin: 0, padding: 0 }}
                    textStyle={{ flex: 1, color: '#ffffff', margin: 0, padding: 0, fontSize: 18 }}
                    iconRight
                    checkedColor='#00D7FF'
                  />
                  <Text className='text-[#979797] mt-1'>I have a healthy lifestyle and i want to stick to it.</Text>
                </View>
              </View>
            </ScrollView>
          </AnimateAble.View>
          <TouchableOpacity className='w-[90%] mx-[5%] mb-7 rounded-2xl bg-[#0DA6C2]  justify-self-end mt-5 py-4 align-end' onPress={navigateScreen}><Text className='text-white text-xl font-bold text-center'>Next</Text></TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default OnBoardingScreen4