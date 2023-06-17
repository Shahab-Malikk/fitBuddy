import React from 'react';
import { View, TouchableOpacity, Image, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnBoardingScreen0 from '../components/OnBoardingScreen1';
import OnBoardingScreen1 from '../components/OnBoardingScreen2';
import OnBoardingScreen2 from '../components/OnBoardingScreen3';
import OnBoardingScreen3 from '../components/OnBoardingScreen4';
import { useNavigation } from '@react-navigation/native';



const OnBoardingScreen = () => {
  const [counter, setCounter] = React.useState(0)
  const navigation = useNavigation()
  const navigateScreen = () => { 
    setCounter(counter+1)
    if (counter >= 3) {
      navigation.navigate('OnCompletion')
    
   }

  }
  return (
    <SafeAreaView className='flex-1 bg-background1'>
      <View className='flex-1  items-center'>
        <View className='flex mt-7 w-[90%] mx-[5%]'>
          <Text className='text-3xl font-semibold text-white capitalize text-center'>Tell About Yourself </Text>
          <Text className='text-[#DDD9D6]  text-center mt-3'>Please select your info this helps us to create a personalized plan.</Text>
        </View>
        
        <View className='flex-1 mb-8 bg-[#262450] shadow-sm mt-10 rounded-sm w-[90%] mx-[5%]'>
          {counter === 0 && <OnBoardingScreen0 />}
          {counter === 1 && <OnBoardingScreen1 />}
          {counter === 2 && <OnBoardingScreen2 />}
          {counter === 3 && <OnBoardingScreen3 />}
          <TouchableOpacity className='w-[90%] mx-[5%] mb-7 rounded-2xl bg-[#0DA6C2]  justify-self-end mt-5 py-4 align-end' onPress={navigateScreen}><Text className='text-white text-xl font-bold text-center'>Next</Text></TouchableOpacity>
        </View>
   
      </View>
    </SafeAreaView>
  );
}



export default OnBoardingScreen;
