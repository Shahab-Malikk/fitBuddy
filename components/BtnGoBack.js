import React from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const BtnGoBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name='arrow-back-ios' size={24} color='#fff'></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({})

export default BtnGoBack;
