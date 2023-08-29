// EditDashes.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const EditDashes = ({ route, navigation }) => {
  const { item: initialItem, amount: initialAmount } = route.params;

  const [editedItem, setEditedItem] = useState(initialItem);
  const [editedAmount, setEditedAmount] = useState(initialAmount);

  const handleSavePress = () => {
    // Implement your logic to save the edited item and amount to your data or database here
    // For simplicity, we'll just navigate back to the details screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Edit Item Collected:</Text>
      <TextInput
        value={editedItem}
        onChangeText={(text) => setEditedItem(text)}
        style={styles.input}
      />
      <Text>Edit Amount:</Text>
      <TextInput
        value={editedAmount}
        onChangeText={(text) => setEditedAmount(text)}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleSavePress}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
  },
});

export default EditDashes;
