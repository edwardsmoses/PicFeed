
import React, { useState } from 'react';

import { TextInput, StyleSheet, View } from 'react-native';

const CommentInput = ({ onSubmit, placeholder = "Leave a comment..." }) => {

    const [text, setText] = useState('');

    const handleSubmitEdit = () => {
        if (!text) return;
        onSubmit(text);
        setText('');
    }

    return (
        <View style={styles.commentContainerStyle}>
            <TextInput style={styles.commentInputStyle}
                value={text}
                placeholder={placeholder}
                underlineColorAndroid='transparent'
                onChangeText={(text) => { setText(text); }}
                onSubmitEditing={handleSubmitEdit}
            />
        </View>
    )
}

export default CommentInput;

const styles = StyleSheet.create({

    commentContainerStyle: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        paddingHorizontal: 20,
        height: 60
    },
    commentInputStyle: {
        flex: 1
    }

});
