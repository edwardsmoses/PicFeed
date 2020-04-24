import React, { useState, useEffect } from 'react';
import { AsyncStorage, Modal, StyleSheet, View, Platform } from 'react-native';

import Constants from 'expo-constants';


import Feed from './screens/Feed';
import Comments from "./screens/Comments";


export default function App() {


  const initcommentState = {
    allPicComments: {},
    showModal: false,
    selectedItemId: null
  }

  const [commentState, setCommentState] = useState(initcommentState);

  const openCommentScreen = id => {
    setCommentState({ ...commentState, showModal: true, selectedItemId: id })
  };

  const closeCommentScreen = () => {
    setCommentState({ ...commentState, showModal: false, selectedItemId: null });
  };

  const onSubmitComment = (text) => {
    const comments = commentState.allPicComments[commentState.selectedItemId] || [];
    const updated = {
      ...commentState.allPicComments, [commentState.selectedItemId]: [...comments, text],
    };
    setCommentState({ ...commentState, allPicComments: updated });

    try {
      AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY, JSON.stringify(updated));
    } catch (error) {
      console.log('Failed to save comment', text, 'for', commentState.selectedItemId);
    }
  };

  const ASYNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY';

  useEffect(() => {
    try {
      AsyncStorage.getItem(ASYNC_STORAGE_COMMENTS_KEY).then((storageComments) => {
        setCommentState({ ...commentState, allPicComments: storageComments ? JSON.parse(storageComments) : {} })
      });
    } catch (error) {
      console.log("failed to read comments from storage");
    }
    return () => {

    }
  }, []);

  return (
    <View style={styles.container}>
      <Feed style={styles.feed}
        itemComments={commentState.allPicComments}
        onPressComments={openCommentScreen}
      ></Feed>
      <Modal visible={commentState.showModal}
        animationType='slide'
        onRequestClose={closeCommentScreen}>
        <Comments style={styles.comments}
          comments={commentState.allPicComments[commentState.selectedItemId]}
          onSubmitComment={onSubmitComment}
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
