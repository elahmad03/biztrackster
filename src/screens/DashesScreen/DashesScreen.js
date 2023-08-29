import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DashesScreen = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: '1',
      date: 'Date',
      item: 'Item Collected',
      name: 'Name',
      amount: 'Amount',
    },
    {
      id: '2',
      date: '2023-08-28',
      item: 'Brake Pad, plugs',
      name: 'Aliji Gujungu',
      amount: '2000 Naira',
    },
    {
      id: '3',
      date: '2023-08-29',
      item: 'Oil Filter',
      name: 'John Doe',
      amount: '1500 Naira',
    },
    {
      id: '4',
      date: '2023-08-30',
      item: 'Spark Plugs',
      name: 'Jane Smith',
      amount: '800 Naira',
    },
    // Add more data entries here...
  ];

  const handleItemPress = (item) => {
    navigation.navigate('DashesDetails', { item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View style={styles.dataEntry}>
        <Text style={styles.column}>{item.date}</Text>
        <Text style={styles.column}>{item.name}</Text>
        <Text style={styles.column}>{item.item}</Text>
        <Text style={styles.column}>{item.amount}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.dataEntry}>
        <Text style={styles.headerText}>Date</Text> 
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Item Collected</Text>
        <Text style={styles.headerText}>Amount</Text>
      </View>
      <FlatList
        data={data.slice(1)} // Exclude the headers from the FlatList
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  dataEntry: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 0, // Remove border radius
    backgroundColor: '#f0f0f0', // Add background color for headers
    padding: 8, // Adjust padding
    marginBottom: 4, // Adjust margin
  },
  column: {
    flex: 1,
    padding: 4, // Add padding to columns
  },
  headerText: {
    fontWeight: 'bold',
    flex: 1,
    padding: 4, // Add padding to header text
  },
});

export default DashesScreen;
