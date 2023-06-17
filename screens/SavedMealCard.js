import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';

const SavedMealCard = (props, { removeHandler}) => {
  return (
    <View className='px-3 mt-4 flex-row justify-between align-baseline py-3 bg-[#7B78AA] border-white shadow-md rounded-md mb-4'>
      <View className='flex-row'>
        <Image source={require(`../assets/${props.imgUrl}`)} className='w-20 h-20 rounded-md' />
        <View className='ml-4 flex-col justify-between'>
          <Text className='text-white text-lg font-bold mb-3'>{ props.name}</Text>
          <View>
            <Text className='text-xsm text-[#DDD9D6]'>400-600 kcal</Text>
            <Text className='text-xsm text-[#DDD9D6]'>1 Piece</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => {
        removeHandler()
      }} style={{ justifyContent: 'center', alignSelf: 'center' }}>
        <Icon name='circle-with-cross' size={24} color='#FF9900'></Icon>
      </TouchableOpacity>
    </View>
  )
}

export default SavedMealCard