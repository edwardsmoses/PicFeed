import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle, styles.largeText}>PicFeed</Text>
      <Text style={styles.textStyle}>Open up PicFeed to view all the sights of the world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto"
  },
  largeText: {
    fontSize: 20
  }
});
