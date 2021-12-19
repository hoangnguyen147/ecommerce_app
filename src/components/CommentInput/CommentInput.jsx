import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { createRef } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { ref } from 'yup';
import SearchIcon from '../../library/icons/SearchIcon'
import { CommentIconWrapper, CommentInput, CommentInputFake, CommentWrapper, SubmitIconWrapper } from './Comment.styles';

const Comment = ({ value, setValue = () => {} }) => {
    const [CommentField, setCommentField] = useState("");

    return (
        <TouchableOpacity onPress={() => {}}>
            <CommentWrapper>
                <CommentIconWrapper>
                    <SearchIcon />
                </CommentIconWrapper>
                <SubmitIconWrapper>
                  <SearchIcon />
                </SubmitIconWrapper>
                <CommentInput value={value} onChangeText={(text) => {
                    setValue(text);
                }} autoFocus={true} placeholder="Nhập bình luận"  />
            </CommentWrapper>
        </TouchableOpacity>
    )
}

export default Comment


