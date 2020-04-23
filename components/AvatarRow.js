import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


import Avatar from './Avatar';
import getAvatarColor from '../utils/getAvatarColor';
import getInitials from '../utils/getInitials';


const AvatarRow = ({ fullName, linkText, onPressLinkText }) => {
    return (
        <View style={styles.rowContainerStyle}>
            <Avatar size={35} initials={getInitials(fullName)} backgroundColor={getAvatarColor(fullName)} />
            <Text style={styles.textStyle} numberOfLines={1}>{fullName}</Text>
            {
                !!linkText && (
                    <TouchableOpacity onPress={onPressLinkText}>
                        <Text numberOfLines={1}>{linkText}</Text>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

export default AvatarRow;


const styles = StyleSheet.create({

    rowContainerStyle: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    textStyle: {
        flex: 1,
        marginHorizontal: 6,
        fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto"
    }

});
