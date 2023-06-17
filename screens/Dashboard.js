import React from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProgressChart } from 'react-native-chart-kit';
import { useSelector } from 'react-redux';
import { meals } from '../slices/mealSlice';
import { useNavigation } from '@react-navigation/native';
import { profileData } from '../slices/profileSlice';



const Dashboard = () => {
  const navigation = useNavigation();
  const allMeals = useSelector(meals);
  const breakFastMeals = useSelector((state) => state.meal.meals.filter((meal) => meal.type === 'breakfast'));
  const lunchMeals = useSelector((state) => state.meal.meals.filter((meal) => meal.type === 'lunch'));
  const dinnerMeals = useSelector((state) => state.meal.meals.filter((meal) => meal.type === 'dinner'));
  const profile = useSelector(profileData);
  console.log(profile);

  const data = {
    data: [0.75]
  };
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.2,
    useShadowColorFromDataset: false // optional
  };
  return (
    <SafeAreaView className='flex-1 bg-background1'>
      <View className='flex-row items-center justify-between w-[90%] mx-[5%] py-10'>
        <View className='flex-row items-center'>
          <Image source={require('../assets/malik.jpeg')} className='w-10 h-10 rounded-full'></Image>
          <Text className='text-white ml-2 text-md capitalize'>Hi, { profile[0].name}</Text>
        </View>

        <View className='flex-row '>
          <Icon name='bell-badge' size={24} color='#fff'></Icon>
          <Icon name='dots-vertical' size={24} color='#fff'></Icon>
        </View>
      </View>
      <View className='bg-[#0DA6C2] w-[90%] mx-[5%] py-5 px-5 flex-row justify-between'>
        <View className='relative'>
          <Text className='text-white text-xl font-semibold absolute top-8 left-8'>{data.data * 100}%</Text>
          <ProgressChart
            data={data}
            width={100}
            height={100}
            strokeWidth={14}
            radius={42}
            hideLegend={true}
            bgColor='#0DA6C2'
            chartConfig={chartConfig}
          />
        </View>
        <View className='flex w-[60%] mr-2'>
          <Text className='text-[#262450] text-xl font-semibold mb-2'>Weekly Achievement</Text>
          <Text className='text-[#E3E3E8]'>Very good, you have achieved 75% of your weekly achievemrents based on your fitness plan.</Text>
          <TouchableOpacity className='flex-row items-center justify-end'>
            <Text className='text-white font-medium'>See More</Text>
            <Icon name='chevron-right' size={24} color='#fff'></Icon>
          </TouchableOpacity>
        </View>

      </View>

      <ScrollView>
        <View className='w-[90%] mx-[5%] py-5'>
          <Text className='text-white text-lg font-semibold mb-2'>Daily Activity</Text>
          <View className='flex-row justify-between'>
            <TouchableOpacity className='flex  bg-[#2D2E53] w-[47%] mr-2 py-5 px-5 rounded-lg'>
              <Text className='text-[#fff] text-xl font-normal  mb-2'>Weight</Text>
              <Image source={require('../assets/Vector1.png')} className='w-[100%] h-[150px] mt-2'></Image>
              <Text className='mt-[-40px] text-white text-lg'>75 Kg</Text>
              <Text className='text-[#fff] text-xs'>Last Updated 4 hours ago</Text>
            </TouchableOpacity>
            <TouchableOpacity className='flex justify-between bg-[#2D2E53] w-[47%] mr-2 py-5 px-5 rounded-lg'>
              <Text className='text-[#fff] text-xl font-normal  mb-2'>Steps</Text>
              <Image source={require('../assets/Balance.png')} className='w-20 h-20 mt-2 self-end'></Image>
              <View className='mt-5'>
                <Text className='text-white text-lg'>2289 Steps</Text>
                <Text className='text-[#fff] text-xs'>Last Updated 4 hours ago</Text>
              </View>
            </TouchableOpacity>

          </View>
          <View className='flex-row mt-4 justify-between'>
            <TouchableOpacity className='flex justify-between  bg-[#2D2E53] w-[47%] mr-2 py-5 px-5 rounded-lg' onPress={() => {
              navigation.navigate('MealsList');
            }}>
              <Text className='text-[#fff] text-xl font-normal  mb-2'>Meals</Text>
              <Image source={require('../assets/bodyOutline.png')} className='w-[60px] h-[60px] mt-2'></Image>
              <View>
                <Text className=' text-white text-lg'>Nutrition</Text>
                <Text className='text-[#fff] text-xs'>Personalize your meals</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate('WorkoutsMain');
            }} className='flex justify-between bg-[#2D2E53] w-[47%] mr-2 py-5 px-5 rounded-lg'>
              <Text className='text-[#fff] text-xl font-normal  mb-2'>Workout</Text>
              <Image source={require('../assets/Balance2.png')} className='w-20 h-20 mt-2 self-end'></Image>
              <View>
                <Text className=' text-white text-lg'>4 Workouts</Text>
                <Text className='text-[#fff] text-xs'>Last Updated 4 hours ago</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>              
      </ScrollView>

    </SafeAreaView>
  );
}



export default Dashboard;
