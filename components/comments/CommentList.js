import React from 'react';

import { ScrollView, StyleSheet, View, Text } from 'react-native';


const CommentList = ({ items }) => {

    const renderComments = (item, index) => {
        return (
            <View key={index} style={styles.commentItemStyle}>
                <Text>{item}</Text>
            </View>
        )
    }

    const isCommentsExist = items && items.length > 0;

    return (
        <View>
            {isCommentsExist ?
                <ScrollView>
                    {items.map(renderComments)}
                </ScrollView> :
                <View style={styles.emptyCommentsStyle}>
                    <Text style={styles.emptyTextStyle}>No comments yet...</Text>
                </View>
            }
        </View>
    )
}

export default CommentList;

const styles = StyleSheet.create({
    commentItemStyle: {
        marginLeft: 20,
        paddingVertical: 20,
        paddingRight: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    emptyCommentsStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyTextStyle: {
        marginTop: 50
    }
});
