import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { createRef } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, Pressable, Modal } from 'react-native'
import { ref } from 'yup';
import ArrowRightCircle from '../../library/icons/ArrowRightCircle';
import SearchIcon from '../../library/icons/SearchIcon'
import { CommentIconWrapper, CommentInput, CommentInputFake, CommentWrapper, SubmitIconWrapper } from './Comment.styles';

const Order = ({ setIsModalRating, useComment }) => {
  const [CommentField, setCommentField] = useState("");
  const [value, setValue] = useComment;

  return (
    <CommentWrapper>
      <SubmitIconWrapper>
        <TouchableOpacity onPress={() => {
          console.log("000")
          setIsModalRating(true);
          console.log("set r ne")
        }}>
          <ArrowRightCircle color={"#0ACF83"} />
        </TouchableOpacity>

      </SubmitIconWrapper>
      <CommentInput value={value} onChangeText={(text) => {
        setValue(text);
      }} autoFocus={true} placeholder="Nhập bình luận" />
    </CommentWrapper>
  )
}

export default Order



