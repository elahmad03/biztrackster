import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style ={styles.container}>

      <TextInput
      style={styles.input}
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      secureTextEntry ={secureTextEntry} /> 
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: "#fff",
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    paddingVertical: 10,
    },
});

export default CustomInput
