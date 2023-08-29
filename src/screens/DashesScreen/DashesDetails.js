// DashesDetails.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DashesDetails = ({ route }) => {
  const { item, amount } = route.params.item;
  const navigation = useNavigation();

  const handleEditPress = () => {
    navigation.navigate('EditDashes', { item, amount });
  };

  return (
    <View style={styles.container}>
      <Text>Item Collected: {item}</Text>
      <Text>Amount: {amount}</Text>
      <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  editButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
  },
});

export default DashesDetails;
