import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View, Platform } from "react-native";

const NavigationBar = ({ title = '', lefText = '', onPressLeftText }) => {
    return (
        <View style={styles.barViewStyle}>
            <TouchableOpacity style={styles.leftTextStyle} onPress={onPressLeftText}>
                <Text>{lefText}</Text>
            </TouchableOpacity>
            <Text style={styles.titleStyle}>{title}</Text>
        </View>
    )
}

export default NavigationBar;

const styles = StyleSheet.create({
    barViewStyle: {
        height: 40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleStyle: {
        fontWeight: '500',
        fontFamily: Platform.OS === 'android' ? 'monospace' : ""
    },
    leftTextStyle: {
        position: 'absolute',
        left: 20,
        top: 0,
        bottom: 0,
        justifyContent: 'center'
    }
});
