import { Text, TextInput, View } from "react-native"
import styled from "styled-components"

export const CommentInput = styled(TextInput)`
    padding: 8px;
    padding-left: 45px;
    width: 100%;
    border: 2px solid #ddd;
    border-radius: 14px;
`

export const CommentInputFake = styled(Text)`
    padding: 15px;
    padding-bottom: 12px;
    padding-left: 45px;
    width: 90%;
    border: 2px solid #ddd;
    border-radius: 14px;
    color: #aaa;
`

export const CommentWrapper = styled(View)`
    position: relative;
    flex-direction: row;
    margin: 14px auto;
`

export const CommentIconWrapper = styled(View)`
    position: absolute;
    padding: 14px;
`

export const SubmitIconWrapper = styled(View)`
    position: absolute;
    padding: 14px;
    right: 0;
`