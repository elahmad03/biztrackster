import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.content}>
        <Navigation />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
