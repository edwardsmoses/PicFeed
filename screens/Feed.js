import React, { useState, useEffect } from 'react';

import { ActivityIndicator, Text, SafeAreaView, StyleSheet, Platform, View } from 'react-native';


import { fetchImages } from '../utils/api';
import CardList from '../components/CardList';
import NavigationBar from "../components/navigation/NavigationBar";


const Feed = ({ FeedStyle, itemComments, onPressComments }) => {

    const initFeedState = {
        loading: true,
        error: false,
        items: []
    }
    const [feedState, setFeedState] = useState(initFeedState);

    useEffect(() => {
        try {
            fetchImages().then(images => {
                console.log('this is called');
                setFeedState({ ...feedState, loading: false, items: images });
            });

        } catch (error) {
            setFeedState({ ...feedState, loading: false, error: true });
        }
        return () => {
            //this is to stop the api from recalling itself
            //cleared dependency
        }

    }, []);


    if (feedState.loading) {
        return <View style={styles.loadingViewStyle}><ActivityIndicator size='large' />
            <Text style={styles.textStyle}>Loading my Feed....</Text></View>
    }

    if (feedState.error) {
        return <Text style={[styles.textStyle, styles.errorTextStyle]}>Error loading your Feed...</Text>
    }

    return (
        <SafeAreaView style={FeedStyle}>
            <NavigationBar title="PicFeed" />
            <CardList items={feedState.items}
                itemComments={itemComments}
                onPressComments={onPressComments} />
        </SafeAreaView>
    )
}

export default Feed;


const styles = StyleSheet.create({
    loadingViewStyle: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    errorTextStyle: {
        fontSize: 25,
    },
    textStyle: {
        fontSize: 15,
        fontFamily: Platform.OS === 'android' ? "Roboto" : ""
    }

});