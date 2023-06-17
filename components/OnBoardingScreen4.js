import React, { useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, TextInput, Image,ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import * as AnimateAble from 'react-native-animatable'




const OnBoardingScreen4 = (data) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxToggle = (itemValue) => {
    if (selectedItems.includes(itemValue)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemValue));
    } else {
      setSelectedItems([...selectedItems, itemValue]);
    }
  };

  console.log(selectedItems);
  return (
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
  );
}

const styles = StyleSheet.create({})

export default OnBoardingScreen4;
