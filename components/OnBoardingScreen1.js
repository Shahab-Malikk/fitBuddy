import { View, Text ,TextInput} from 'react-native'
import React from 'react'
import * as AnimateAble from 'react-native-animatable'

const OnBoardingScreen1 = () => {
  return (
    <AnimateAble.View iterationCount={1} animation='fadeIn' className='flex-1 justify-center'>

      <View className='mt-9 flex justify-center w-[90%] mx-[5%]'>
        <TextInput style={{ outline: 'none' }} className='mt-4 flex-1 px-1 py-2 border-[#0da6c2] w-[60%] ml-[20%] text-center font-bold text-2xl text-white border-b-2' placeholder='Your Name' placeholderTextColor='#ffffff'
        ></TextInput>
      </View>

    </AnimateAble.View>

  )
}

export default OnBoardingScreen1