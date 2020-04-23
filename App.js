import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import Constants from 'expo-constants';


import Feed from './screens/Feed';



export default function App() {

  return (
    <View style={styles.container}>
      <Feed style={styles.feed}></Feed>
    </View>
  );
}

const platformVersion =
  Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  feed: {
    flex: 1,
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight
        : 0,
  },

});
