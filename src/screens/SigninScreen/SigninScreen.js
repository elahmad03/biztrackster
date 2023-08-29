
import { Button, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react';
import CustomInput from '../../component/CustomInput';
import  { useState } from 'react';
import CustomButton from '../../component/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SigninScreen = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onPressSignIn = () =>{
    console.warn('sign in pressed');
    navigation.navigate('Home');

  }
  const onPressForgotpassword = () =>{
    console.warn('forgotpassword si pressed');

  }
  const onPressSignInwithGoogle = () =>{
    console.warn('sign in with ggole pressed');

  }
  
  const onPressSignInwithFbook = () =>{
    console.warn('sign in fbook pressed');

  }
  
  const onPressSignInwithApple = () =>{
    console.warn('sign in apple pressed');

  }
  
  const onPressSignUp = () =>{
    console.warn('sign Up pressed');
    navigation.navigate('SignUp');

  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <CustomInput 
      placeholder="Username" 
      value={username} 
      setValue={setUsername} />

      <CustomInput 
      placeholder="Password" 
      value={password}
      setValue={setPassword} 
      secureTextEntry
      />
      <CustomButton text="sign in" onPress={onPressSignIn}/>
      <CustomButton 
       text="forgot password"
       onPress={onPressForgotpassword}
       type='TERTIARY'
       />
      
      <View style={styles.lineContainer}>
        <View style={styles.leftLine} />
        <Text style={styles.centerText}>Or</Text>
        <View style={styles.rightLine} />
      </View>
      <CustomButton 
      text="sign in with google"
       onPress={onPressSignInwithGoogle}
       bgColor="#E7EAF4"
       fgColor="#4765A9"
       />
       <CustomButton 
      text="sign in with facebook"
       onPress={onPressSignInwithFbook}
       bgColor="#FAE9EA"
       fgColor="#DD4D44"
       />
       <CustomButton 
      text="sign in with apple"
       onPress={onPressSignInwithApple}
       bgColor="#E3E3E3"
       fgColor="#363636"
       />

      <View style={styles.lineContainer}>
        <View style={styles.leftLine} />
        <Text style={styles.centerText}>Or Create An account</Text>
        <View style={styles.rightLine} />
      </View>
      
      <View>
        <Pressable  onPress={onPressSignUp}  style={styles.btncontainer}>
            <Text style={styles.btnTxt}>Sign Up</Text>
         </Pressable>
      </View>


    </View>
    </ScrollView>
  )
}
export default SigninScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  leftLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'grey',
    marginRight: 10,
  },
  rightLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'grey',
    marginLeft: 10,
  },
  centerText: {
    fontWeight: 'bold',
    textTransform:'capitalize',
    color: 'grey',
    padding: 10,
  },
  btncontainer:{
    backgroundColor: '#00B8FF',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnTxt:{
    color:'#FFF',
  }
});


