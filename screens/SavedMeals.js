import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Tab, TabView } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { removeMeal } from '../slices/savedMealSlice';
import { savedMeals } from '../slices/savedMealSlice';
import { removeFavMeal } from '../slices/favouriteMealSlice';
import { favouriteMeals } from '../slices/favouriteMealSlice';
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const SavedMeals = () => {
  const [index, setIndex] = React.useState(0);
  const dispatch = useDispatch();
  const sMeals = useSelector(savedMeals)
  const favMeals = useSelector(favouriteMeals)
  const navigation = useNavigation();
  return (
    <SafeAreaView className='flex-1 flex-shrink-0 bg-background1 overflow-x-hidden'>
      <View className='flex-1 w-[90%] h-max mx-[5%] py-10'>
        <View className='flex-row justify-between'>
          <TouchableOpacity onPress={() => navigation.navigate('MealsList')}>
            <Icon2 name='arrow-back-ios' size={24} color='#fff'></Icon2>
          </TouchableOpacity>

        </View>
        <View className='mt-8  bg-[2d2e53] overflow-x-hidden'>
          <Tab
            value={index}
            onChange={(e) => setIndex(e)}
            indicatorStyle={{
              backgroundColor: '#00D7FF',
              height: 3,
            }}
            variant="#2d2e53"
          >
            <Tab.Item
              icon={{ name: 'bookmark-outline', type: 'ionicon', color: '#00D7FF' }}
            />
            <Tab.Item
              icon={{ name: 'heart-outline', type: 'ionicon', color: '#00D7FF' }}
            />

          </Tab>

          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{ backgroundColor: '#2d2e53', width: '90%' }}>
              <View className='px-8 pt-4'>
                <Text className='text-white text-sm font-normal'>Saved Meals</Text>
                {sMeals.length === 0 &&
                  (<View className='flex-col justify-center items-center my-8'>
                    <Icon name='emoji-sad' size={40} color='#FF9900'></Icon>
                    <Text className='text-white text-lg font-bold mt-4'>No Saved Meals</Text>
                    <Text className='text-white text-sm font-normal mt-2'>Save your meals to see them here</Text>
                  </View>)
                }
                {sMeals.length > 0 &&
                  (<ScrollView >
                    <View>
                      {sMeals.map((meal) => (
                        <View className='px-3 mt-4 flex-row justify-between align-baseline py-3 bg-[#7B78AA] border-white shadow-md rounded-md mb-4'>
                          <View className='flex-row'>
                            <Image source={require(`../assets/${meal.imgUrl}`)} className='w-20 h-20 rounded-md' />
                            <View className='ml-4 flex-col justify-between'>
                              <Text className='text-white text-lg font-bold mb-3'>{meal.name}</Text>
                              <View>
                                <Text className='text-xsm text-[#DDD9D6]'>400-600 kcal</Text>
                                <Text className='text-xsm text-[#DDD9D6]'>1 Piece</Text>
                              </View>
                            </View>
                          </View>
                          <TouchableOpacity onPress={() => {
                            dispatch(removeMeal({ id: meal.id }))
                          }} style={{ justifyContent: 'center', alignSelf: 'center' }}>
                            <Icon name='circle-with-cross' size={24} color='#FF9900'></Icon>
                          </TouchableOpacity>
                        </View>
                      ))}
                    </View>

                  </ScrollView>)
                }


              </View>

            </TabView.Item>
            <TabView.Item style={{ backgroundColor: '#2d2e53', width: '90%' }}>
              <View className='px-8 pt-4'>
                <Text className='text-white text-sm font-normal'>Meals you like</Text>
                {favMeals.length === 0 &&
                  (<View className='flex-col justify-center items-center my-8'>
                    <Icon name='emoji-sad' size={40} color='#FF9900'></Icon>
                    <Text className='text-white text-lg font-bold mt-4'>No Favourite Meals</Text>
                    <Text className='text-white text-sm font-normal mt-2'>Save favourite your meals to see them here</Text>
                  </View>)
                }
                {favMeals.length > 0 &&
                  (<ScrollView >
                    <View>
                      {favMeals.map((meal) => (
                        <View className='px-3 mt-4 flex-row justify-between align-baseline py-3 bg-[#7B78AA] border-white shadow-md rounded-md mb-4'>
                          <View className='flex-row w-[80%]'>
                            <Image source={require(`../assets/${meal.imgUrl}`)} className='w-20 h-20 rounded-md' />
                            <View className='ml-4 flex-col justify-between '>
                              <Text className='text-white w-[60%] text-md font-bold mb-3'>{meal.name}</Text>
                              <View>
                                <Text className='text-xsm text-[#DDD9D6]'>400-600 kcal</Text>
                                <Text className='text-xsm text-[#DDD9D6]'>1 Piece</Text>
                              </View>
                            </View>
                          </View>
                          <TouchableOpacity onPress={() => {
                            dispatch(removeFavMeal({ id: meal.id }))
                          }} style={{ justifyContent: 'center', alignSelf: 'center' }}>
                            <Icon name='circle-with-cross' size={24} color='#FF9900'></Icon>
                          </TouchableOpacity>
                        </View>
                      ))}
                    </View>

                  </ScrollView>)
                }


              </View>
            </TabView.Item>

          </TabView>

        </View>

      </View>


    </SafeAreaView>
  )
}

export default SavedMeals