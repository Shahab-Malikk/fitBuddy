import React from 'react';
import { View, TouchableOpacity, Image, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MealCard = (props) => {
  const navigation = useNavigation();
  const navigateToMeal = () => {
    navigation.navigate('Meal', {id:props.id, name: props.name, imgUrl: props.imgUrl, calories: props.calories,type:props.type });
  }

  return (
    <TouchableOpacity onPress={navigateToMeal} className='relative mr-2 h-[150px] w-[150px]' >
      <ImageBackground source={require(`../assets/${props.imgUrl}`)} className='h-[150px] w-[150px] brightness-50 hover:translate-y-4 rounded-lg overflow-hidden'><View className='bg-[#00000080] h-[150px] w-[150px] '></View></ImageBackground>
      <Text className='absolute bottom-7 left-1 text-white font-semibold'>{props.name}</Text>
      <Text className='absolute bottom-1 left-1 text-white font-semibold'>{props.calories} calories</Text>
    </TouchableOpacity>
  );
}



export default MealCard;
