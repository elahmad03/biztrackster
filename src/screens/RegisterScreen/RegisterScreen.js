
import { Button, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
import CustomInput from '../../component/CustomInput'
import  { useState } from 'react'
import CustomButton from '../../component/CustomButton'

const RegisterScreen = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword , setcomfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setcompanyName] = useState('');

  const onPressSignIn = () =>{
    console.warn('signup in pressed');

  }
  const onPressForgotpassword = () =>{
    console.warn('forgotpassword si pressed');

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
      <CustomInput 
      placeholder="Comfirm password" 
      value={password}
      setValue={setcomfirmPassword} 
      secureTextEntry
      />
      <CustomInput 
      placeholder="Email" 
      value={email}
      setValue={setEmail} 
      />
      <CustomInput 
      placeholder="Phone number" 
      value={phoneNumber}
      setValue={setPhoneNumber} 
      />
      <CustomInput 
      placeholder="Company Name" 
      value={companyName}
      setValue={setcompanyName} 
      />
      <CustomButton text="Register" onPress={onPressSignIn}/>
      <CustomButton 
       text="forgot password"
       onPress={onPressForgotpassword}
       type='TERTIARY'
       />
      
      <View style={styles.lineContainer}>
        <View style={styles.leftLine} />
        <Text style={styles.centerText}>Do you have an account?</Text>
        <View style={styles.rightLine} />
      </View>
      
      <View>
        <Pressable  onPress={onPressSignUp}  style={styles.btncontainer}>
            <Text style={styles.btnTxt}>Sign in</Text>
         </Pressable>
      </View>


    </View>
    </ScrollView>
  )
}
export default RegisterScreen

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


