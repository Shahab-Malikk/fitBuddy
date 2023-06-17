import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import BtnGoBack from '../components/BtnGoBack';
import { ProgressChart } from 'react-native-chart-kit';
import NutritionCategory from '../components/NutritionCategory';

const MealsList = () => {
  const data = {
    data: [0.65]
  }
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

    <SafeAreaView className='flex-1 flex-shrink-0 bg-background1'>
      <View className='w-[90%] h-max mx-[5%] py-10'>
        <BtnGoBack />
        <View className='bg-[#7B78AA] border-gray-100 mt-8 rounded-md shadow-sm py-5 px-5 flex-row justify-between'>
          <View className='flex justify-evenly w-[60%] ml-2'>
            <View>
              <Text className='text-white text-xl font-semibold mb-2'>Nutrition Plan</Text>
              <Text className='text-[#E3E3E8]'>Your plan depends be daily intake:</Text>
            </View>
            <View className='flex-row justify-between'>
              <View className='flex'>
                <Text className='text-white text-md font-semibold'>186 g</Text>
                <Text className='text-white text-md font-semibold'>Carbs</Text>
              </View>
              <View className='flex'>
                <Text className='text-white text-md font-semibold'>186 g</Text>
                <Text className='text-white text-md font-semibold'>Carbs</Text>
              </View>
              <View className='flex'>
                <Text className='text-white text-md font-semibold'>186 g</Text>
                <Text className='text-white text-md font-semibold'>Carbs</Text>
              </View>
            </View>

          </View>
          <View className='relative'>
            <Text className='text-white text-lg font-semibold absolute top-9 left-8'>75%</Text>
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
            <TouchableOpacity className='flex-row mt-4 items-center justify-end'>
              <Text className='text-white font-medium'>See More</Text>
              <Icon name='chevron-right' size={24} color='#fff'></Icon>
            </TouchableOpacity>
          </View>
        </View>
        <NutritionCategory></NutritionCategory>
      </View>
    </SafeAreaView>

  );
}



export default MealsList;
