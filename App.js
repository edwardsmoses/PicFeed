import React, { useState } from 'react';
import { Modal, StyleSheet, View, Platform } from 'react-native';

import Constants from 'expo-constants';


import Feed from './screens/Feed';
import Comments from "./screens/Comments";


export default function App() {


  const initModalState = {
    itemComment: {},
    showModal: false,
    selectedItemId: null
  }

  const [modalState, setModalState] = useState(initModalState);

  const openCommentScreen = id => {
    setModalState({ ...modalState, showModal: true, selectedItemId: id })
  };

  const closeCommentScreen = () => {
    setModalState({ ...modalState, showModal: false, selectedItemId: null });
  }

  return (
    <View style={styles.container}>
      <Feed style={styles.feed}
        itemComments={initModalState.itemComment}
        onPressComments={openCommentScreen}
      ></Feed>
      <Modal visible={modalState.showModal} animationType='slide' onRequestClose={closeCommentScreen}>
        <Comments style={styles.comments}
          comments={initModalState.itemComment[initModalState.selectedItemId]}
          onClose={closeCommentScreen} />
      </Modal>
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
  comments: {
    flex: 1,
    marginTop:
      Platform.OS === 'ios' && platformVersion < 11
        ? Constants.statusBarHeight
        : 0,
  },


});
