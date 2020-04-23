import React, { useState } from 'react';

import { Image, StyleSheet, View, ActivityIndicator } from 'react-native';


import AvatarRow from './AvatarRow';

const Card = ({ fullName, image, linkText = "", onPressLinkText = () => { } }) => {

    const [imgLoading, setImgLoading] = useState(true)

    const handleImageLoading = () => {
        setImgLoading(false);
    }

    return (
        <View>
            <AvatarRow fullName={fullName}
                linkText={linkText}
                onPressLinkText={onPressLinkText} />
            <View style={styles.imageStyle}>
                {imgLoading && (
                    <ActivityIndicator style={StyleSheet.absoluteFill} size='large' color='teal' />
                )}
                <Image
                    style={StyleSheet.absoluteFill}
                    source={image}
                    onLoad={handleImageLoading} />
            </View>
        </View>

    )
}

export default Card;


const styles = StyleSheet.create({
    imageStyle: {
        aspectRatio: 1,
        backgroundColor: 'rgba(0,0,0,0.02)'
    }
});