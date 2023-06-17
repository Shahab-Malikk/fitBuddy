import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import BtnGoBack from '../components/BtnGoBack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavMeal, removeFavMeal } from '../slices/favouriteMealSlice';
import { favouriteMeals } from '../slices/favouriteMealSlice';
import { addMeal, removeMeal } from '../slices/savedMealSlice';
import { savedMeals } from '../slices/savedMealSlice';
import { useNavigation } from '@react-navigation/native';


const Meal = ({ route }) => {
  const dispatch = useDispatch();
  const { id, name, imgUrl, calories, type } = route.params ?? {};
  const favMeals = useSelector(favouriteMeals)
  const sMeals = useSelector(savedMeals)
  const meal = favMeals.find((meal) => meal.id === id) || {};
  const sMeal = sMeals.find((meal) => meal.id === id) || {};


  const [isFavorite, setIsFavorite] = React.useState(meal.isFavorite);
  const [isAdded, setIsAdded] = React.useState(sMeal.isAdded)
  const navigation= useNavigation();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const toggleAdded = () => {
    setIsAdded(!isAdded)
  }

  useEffect(() => {
    if (isFavorite && meal.isFavorite === undefined) {
      console.log('added to favorite');

      dispatch(addFavMeal({ id: id, name: name, imgUrl: imgUrl, calories: calories, isFavorite: isFavorite }))
    } else if (!isFavorite && isFavorite !== undefined) {
      console.log('removed from favorite');
      dispatch(removeFavMeal({ id: id }))
    } if (isAdded && sMeal.isAdded === undefined) {
      dispatch(addMeal({ id: id, name: name, imgUrl: imgUrl, calories: calories, isAdded: isAdded }))
    } else if (!isAdded && isAdded !== undefined) {
      console.log('removed from saved');
      dispatch(removeMeal({ id: id }))
    }

  }, [isFavorite, isAdded]);

  console.log(favMeals)


  console.log(sMeals)


  return (
    <SafeAreaView className='flex-1 flex-shrink-0 bg-background1'>
      <View className='flex-1 w-[90%] h-max mx-[5%] py-10'>
        <View className='flex-row justify-between'>
          <BtnGoBack />
          <TouchableOpacity onPress={() => {
            navigation.navigate('SavedMeals')
          }}><Icon2 name='basket' size={30} color='#0DA6C2' /></TouchableOpacity>
        </View>
        <View className='mt-8 flex-1'>
          <View className='relative mr-2' >
            <ImageBackground source={require(`../assets/${imgUrl}`)} className='h-[250px] w-[450px]  brightness-50 hover:translate-y-4 rounded-lg overflow-hidden'><View className='bg-[#00000080] flex-1'></View></ImageBackground>
            <TouchableOpacity onPress={toggleFavorite} className='absolute top-2 right-2'>
              <Icon name='cards-heart' size={40} color={meal.isFavorite ? '#FF2626' : '#fff'} />
            </TouchableOpacity>
            <Text className='absolute bottom-10 left-3 mb-2 text-white font-thin capitalize'>{type}</Text>
            <Text className='absolute bottom-8 left-3 text-white font-semibold'>{name}</Text>

          </View>
          <Text className='text-white text-xl font-bold mt-6'>Description</Text>
          <Text className='text-white text-sm mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officiis commodi dolorem nemo vero quaerat tempore numquam, hic explicabo itaque sed vel deserunt.</Text>
          {!isAdded && (<TouchableOpacity className='justify-self-end rounded-2xl bg-[#0DA6C2]  mt-5 py-4 ' onPress={toggleAdded}><Text className='text-white text-xl font-bold text-center'>Add Meal</Text></TouchableOpacity>)}
          {isAdded && <TouchableOpacity className='justify-self-end  rounded-2xl bg-[#0DA6C2]  mt-5 py-4' onPress={toggleAdded}><Text className='text-white text-xl font-bold text-center'>Remove Meal</Text></TouchableOpacity>}

        </View>

      </View>


    </SafeAreaView>
  )
}

export default Meal