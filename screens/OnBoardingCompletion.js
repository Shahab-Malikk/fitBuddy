import React from 'react';
import { View, StyleSheet, Image,SafeAreaView ,TouchableOpacity,Text} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

const OnBoardingCompletion = () => {
  const navigation = useNavigation()
  return (

    <SafeAreaView className='flex-1'>
      <View className='flex-1 bg-background1 justify-center items-center pb-9'>
        <View className='my-[20]'>
          <Animatable.Image
            source={require('../assets/congrats.gif')}
            animation='slideInUp'
            className='h-60 w-60'
            iterationCount={1}
          ></Animatable.Image>
        </View>
        <Animatable.Text animation='slideInRight' className='text-white text-2xl font-medium mt-9'>Wohoo!</Animatable.Text>
        <Animatable.Text animation='slideInLeft' className='w-[80%]  text-white text-sm font-sm text-center mt-9'>You have Completed Customizing your Personal Goals successfully. Now you can start !</Animatable.Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Dashboard')}} className='w-[90%] mx-[5%] mb-7 mt-24 rounded-2xl bg-[#0DA6C2]  justify-self-end  py-4 align-end'><Text className='text-white text-xl font-bold text-center'>Next</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
 
  );
}



export default OnBoardingCompletion;
