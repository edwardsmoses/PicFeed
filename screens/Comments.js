
import React from 'react';

import { SafeAreaView } from "react-native";

import NavigationBar from "../components/navigation/NavigationBar";
import CommentInput from "../components/comments/CommentInput";
import CommentList from "../components/comments/CommentList";

const Comments = ({ CommentStyle, comments, onClose, onSubmitComment }) => {
    return (
        <SafeAreaView style={CommentStyle}>
            <NavigationBar title="Comments" lefText="Close" onPressLeftText={onClose} />
            <CommentInput onSubmit={onSubmitComment} />
            <CommentList items={comments} />
        </SafeAreaView>
    )
}

export default Comments;
