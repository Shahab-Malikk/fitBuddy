import React from 'react';
import { View, StyleSheet,KeyboardAvoidingView, Platform, TextInput, Text, ScrollView } from 'react-native';
import * as AnimateAble from 'react-native-animatable'


const OnBoardingScreen3 = () => {

  return (
    <AnimateAble.View iterationCount={1} animation='fadeIn'  className='flex-1'>
      <ScrollView>
        <KeyboardAvoidingView keyboardVerticalOffset={30} behavior={Platform.OS === "ios" ? "padding" : "height"} className=''>
          <View className='mt-5 w-[90%] mx-[5%]'>
            <Text className='uppercase font-semibold text-lg text-white'>What's Your Weight ?</Text>
            <Text className='text-white mt-3 text-xs'>You can always change it.</Text>

            <TextInput style={{ outline: 'none' }} className='mt-4 flex-1 px-1 py-2 border-[#0da6c2] font-bold text-lg text-white border-b-2' placeholder='Enter Your Weight in KGs' placeholderTextColor='#fff'
            ></TextInput>
          </View>
          <View className='mt-9 w-[90%] mx-[5%]'>
            <Text className='uppercase font-semibold text-lg text-white'>What's Your Height ?</Text>
            <Text className='text-white mt-3 text-xs'>You can always change it.</Text>
            <TextInput keyboardType={'phone-pad'} style={{ outline: 'none' }} className='mt-4 flex-1 px-1 py-2 border-[#0da6c2] font-bold text-lg text-white border-b-2' placeholder='Enter Your Height in cms' placeholderTextColor='#fff'
            ></TextInput>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </AnimateAble.View>
   
  );
}

const styles = StyleSheet.create({})

export default OnBoardingScreen3;
