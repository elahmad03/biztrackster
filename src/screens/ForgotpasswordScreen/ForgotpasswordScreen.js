
import { Button, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
import CustomInput from '../../component/CustomInput'
import  { useState } from 'react'
import CustomButton from '../../component/CustomButton'

const ForgotpasswordScreen= () => {
  
  const [ComfirmAccount, setComfirmAccount] = useState('');
  
 
  const onPressComfirmAccount = () =>{
    console.warn('comfirm account is pressed');

  }
  return (
    <View style={styles.container}>
      <CustomInput 
      placeholder="enter code" 
      value={ComfirmAccount} 
      setValue={setComfirmAccount} />

      <CustomButton text="comfirm" onPress={onPressComfirmAccount}/>
    </View>
  )
}
export default ForgotpasswordScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});


