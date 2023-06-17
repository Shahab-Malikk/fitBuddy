import { View, Text ,SafeAreaView,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import * as AnimateAble from 'react-native-animatable'
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setGender } from '../slices/profileSlice';



const OnBoardingScreen2 = () => {
  const [checked, setChecked] = React.useState('Male'); //initial choice
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const navigateScreen = () => {
    dispatch(setGender(checked))
    navigation.navigate('OnBoarding3')
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
                      status={checked === 'Male' ? 'checked' : 'unchecked'} //if the value of checked is Apple, then select this button
                      onPress={() => setChecked('Male')} //when pressed, set the value of the checked Hook to 'Apple'

                    ></RadioButton>
                    <Text className='text-white text-xl' onPress={() => setChecked('Male')}>Male</Text>
                  </View>
                </View>
                <View className='flex-col items-center'>
                  <Image className='w-[100px] h-[100px]' source={require('../assets/Ellipse7.png')} />
                  <View className='flex-row items-center mt-5'>
                    <RadioButton
                      uncheckedColor='#FFFFFF'
                      color='#00D7FF'
                      value="Samsung"
                      status={checked === 'Female' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('Female')}
                    />
                    <Text className='text-white' onPress={() => setChecked('Female')}>Female</Text>
                  </View>
                </View>

              </View>
            </View>
          </AnimateAble.View>
          <TouchableOpacity className='w-[90%] mx-[5%] mb-7 rounded-2xl bg-[#0DA6C2]  justify-self-end mt-5 py-4 align-end' onPress={navigateScreen}><Text className='text-white text-xl font-bold text-center'>Next</Text></TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default OnBoardingScreen2