import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

import BtnGoBack from '../components/BtnGoBack';
import { ScrollView } from 'react-native-web';
import { breakFastMeals } from '../slices/mealSlice';
import { lunchMeals } from '../slices/mealSlice';
import { dinnerMeals } from '../slices/mealSlice';
import MealCard from '../components/MealCard';

const Meals = ({ route }) => {
  const bFmeals = useSelector(breakFastMeals);
  const lnchmeals = useSelector(lunchMeals);
  const dmeals = useSelector(dinnerMeals);
  const [mealss, setMealss] = useState([]);

  const { type } = route.params ?? {};

  useEffect(() => {
    if (type === 'breakfast') {
      setMealss(bFmeals);
    } else if (type === 'lunch') {
      setMealss(lnchmeals);
    } else if (type === 'dinner') {
      setMealss(dmeals);
    }
  }, [type, bFmeals, lnchmeals, dmeals]);

  return (
    <SafeAreaView className='flex-1 flex-shrink-0 bg-background1'>
      <ScrollView>
        <View className='w-[90%] h-max mx-[5%] py-10'>
          <BtnGoBack />
          <Text className='text-white text-xl font-bold mb-8 capitalize text-center'>{type} Meals</Text>
          <View className='flex-row justify-between flex-wrap'>
            {mealss.map(meal => (
              <View className='mb-8'>
                <MealCard key={meal.id} id={meal.id} name={meal.name} calories='67' imgUrl={meal.imgUrl} type={meal.type} />
              </View>

            ))}
          </View>



        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default Meals;
