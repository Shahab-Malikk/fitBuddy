import React from 'react';
import { View, Text, Image, } from 'react-native';
import { RadioButton } from 'react-native-paper';
import * as AnimateAble from 'react-native-animatable'

const OnBoardingScreen2 = () => {
  const [checked, setChecked] = React.useState('Apple'); //initial choice
  return (
    <AnimateAble.View iterationCount={1} animation='fadeIn' className='flex-1'>
      <View className='mt-5 w-[90%] mx-[5%]'>
        <Text className='uppercase font-semibold text-2xl text-white'>Gender</Text>
        <Text className='text-white mt-3 text-md'>Please Select Your Gender</Text>
      </View>
      <View className='flex-1 w-[90%] mx-[5%]'>
        <View className='justify-between mt-10 flex-row'>
          <View className='flex-col items-center'>
            <Image className='w-[100px] h-[100px]' source={require('../assets/Ellipse6.png')} />
            <View className='flex-row items-center mt-5'>
              <RadioButton
                uncheckedColor='#FFFFFF'
                color='#00D7FF'
                value="Apple"
                status={checked === 'Apple' ? 'checked' : 'unchecked'} //if the value of checked is Apple, then select this button
                onPress={() => setChecked('Apple')} //when pressed, set the value of the checked Hook to 'Apple'
              
              ></RadioButton>
              <Text className='text-white text-xl' onPress={() => setChecked('Apple')}>Male</Text>
            </View>
          </View>
          <View className='flex-col items-center'>
            <Image className='w-[100px] h-[100px]' source={require('../assets/Ellipse7.png')} />
            <View className='flex-row items-center mt-5'>
              <RadioButton
                uncheckedColor='#FFFFFF'
                color='#00D7FF'
                value="Samsung"
                status={checked === 'Samsung' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Samsung')}
              />
              <Text className='text-white' onPress={() => setChecked('Samsung')}>Female</Text>
            </View>
          </View>

        </View>
      </View>
    </AnimateAble.View>
  );
}



export default OnBoardingScreen2;
