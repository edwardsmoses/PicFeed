import React from 'react';

import { ColorPropType, StyleSheet, View, Text } from 'react-native';

const Avatar = ({ size, backgroundColor, initials }) => {

    const style = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor
    }

    const textColor = {
        color: backgroundColor !== "white" ? "white" : "black" //color initials - white when bgcolor is != white
    }

    return (
        <View style={[style, styles.AvatarStyle]} >
            <Text style={[styles.initialsStyle, textColor]}>{initials}</Text>
        </View >
    )
}

export default Avatar;

const styles = StyleSheet.create({
    AvatarStyle: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    initialsStyle: {
        fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
        alignSelf: 'center',
    },
});

