import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../component/CustomButton';
import {useNavigation} from '@react-navigation/native';


const index = () => {
  const navigation = useNavigation();
  const onPressSignIn = () =>{
    console.warn('dashes pressed');
    navigation.navigate('Dashes');

  }

  return (
    <View>
      <Text>Home sweet home</Text>
      <CustomButton text="dashes" onPress={onPressSignIn}/>      
    </View>
  )
}

export default index
