import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import MealCard from './MealCard';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { lowFatMeals } from '../slices/mealSlice';
import { lowCarbMeals } from '../slices/mealSlice';
import { highProteinMeals } from '../slices/mealSlice';
import { vegetarianMeals } from '../slices/mealSlice';
import { ketoMeals } from '../slices/mealSlice';
import { glutenFreeMeals } from '../slices/mealSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
const NutritionCategory = () => {
  const lowFmeals = useSelector(lowFatMeals)
  const lowCmeals = useSelector(lowCarbMeals)
  const highPmeals = useSelector(highProteinMeals)
  const vegmeals = useSelector(vegetarianMeals)
  const ketomeals = useSelector(ketoMeals)
  const glutenmeals = useSelector(glutenFreeMeals)
  const [meals, setMeals] = useState(lowFmeals)
  const navigation = useNavigation()
  let type
  console.log(meals)
  const breakFastNavigator = () => {
    type = 'breakfast'
    navigation.navigate('Meals', { type: type })
  }

  const lunchNavigator = () => {
    type = 'lunch'
    navigation.navigate('Meals', { type: type })
  }
  const dinnerNavigator = () => {
    type = 'dinner'
    navigation.navigate('Meals', { type: type })
  }


  return (
    <View className='flex-1 mt-6'>
      <Text className='text-white text-xl font-semibold mb-4'>Nutrition Category</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 0, paddingTop: 10 }}>
        <View className='flex-row justify-between'>
          <TouchableOpacity className='bg-[#7B78AA] px-4 py-2 rounded-full' onPress={() => { setMeals(lowCmeals) }}><Text className='text-white'>Low Carbs</Text></TouchableOpacity>
          <TouchableOpacity className='bg-[#7B78AA] px-4 py-2 rounded-full ml-3' onPress={() => { setMeals(lowFmeals) }} ><Text className='text-white'>Low Fat</Text></TouchableOpacity>
          <TouchableOpacity className='bg-[#7B78AA] px-4 py-2 rounded-full ml-3' onPress={() => { setMeals(highPmeals) }}><Text className='text-white'>High Protein</Text></TouchableOpacity>
          <TouchableOpacity className='bg-[#7B78AA] px-4 py-2 rounded-full ml-3' onPress={() => { setMeals(vegmeals) }}><Text className='text-white'>Vegeterian</Text></TouchableOpacity>
          <TouchableOpacity className='bg-[#7B78AA] px-4 py-2 rounded-full ml-3' onPress={() => { setMeals(ketomeals) }}><Text className='text-white'>Ketto</Text></TouchableOpacity>
          <TouchableOpacity className='bg-[#7B78AA] px-4 py-2 rounded-full ml-3' onPress={() => { setMeals(glutenmeals) }}><Text className='text-white'>Gulletn Free</Text></TouchableOpacity>
        </View>
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 0, paddingTop: 10 }}>
        {meals.map(meal => (
          <MealCard key={meal.id} id={meal.id} name={meal.name} calories='67' imgUrl={meal.imgUrl} type={meal.type} />
        ))}
      </ScrollView>
      <Text className='mt-9ex my-4 text-xl font-bold text-white'>Main Dishes</Text>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 0, paddingTop: 10 }}>
        <TouchableOpacity onPress={() => {
          breakFastNavigator()
        }} className='flex-row justify-between align-baseline py-3 px-5 bg-[#2D2E53] border border-[#2D2E53] shadow-md rounded-md'>
          <Image source={require('../assets/bm1.jpg')} className='w-20 h-20' />
          <View>
            <Text className='text-[#FF9900] text-lg font-normal mb-3'>Add Breakfast</Text>
            <View>
              <Text className='text-xsm text-[#DDD9D6]'>Recomended</Text>
              <Text className='text-xsm text-[#DDD9D6]'>400-600 kcal</Text>
            </View>
          </View>
          <Icon name='plus-circle-outline' style={{ justifyContent: 'center', alignSelf: 'center' }} size={24} color='#00D7FF'></Icon>


        </TouchableOpacity>

        <TouchableOpacity onPress={lunchNavigator} className='mt-4 flex-row justify-between align-baseline py-3 px-5 bg-[#2D2E53] border border-[#2D2E53] shadow-md rounded-md'>
          <Image source={require('../assets/lm1.jpg')} className='w-20 h-20' />
          <View>
            <Text className='text-[#FF9900] text-lg font-normal mb-3'>Add Lunch</Text>
            <View>
              <Text className='text-xsm text-[#DDD9D6]'>Recomended</Text>
              <Text className='text-xsm text-[#DDD9D6]'>400-600 kcal</Text>
            </View>
          </View>
          <Icon name='plus-circle-outline' style={{ justifyContent: 'center', alignSelf: 'center' }} size={24} color='#00D7FF'></Icon>
        </TouchableOpacity>
        <TouchableOpacity onPress={dinnerNavigator} className='mt-4 flex-row justify-between align-baseline py-3 px-5 bg-[#2D2E53] border border-[#2D2E53] shadow-md rounded-md'>
          <Image source={require('../assets/dm1.jpg')} className='w-20 h-20' />
          <View>
            <Text className='text-[#FF9900] text-lg font-normal mb-3'>Add Dinner</Text>
            <View>
              <Text className='text-xsm text-[#DDD9D6]'>Recomended</Text>
              <Text className='text-xsm text-[#DDD9D6]'>400-600 kcal</Text>
            </View>
          </View>
          <Icon name='plus-circle-outline' style={{ justifyContent: 'center', alignSelf: 'center' }} size={24} color='#00D7FF'></Icon>
        </TouchableOpacity>
      </ScrollView>

    </View>
  );
}



export default NutritionCategory;
