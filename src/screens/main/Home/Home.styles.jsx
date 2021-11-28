import { Image, ImageBackground, Pressable, Text, TextInput, View } from "react-native";
import styled from "styled-components";

export const StartArea = styled(Pressable)`
    margin-top: 25px;
    padding: 0 15px;
`

export const HelloWrapper = styled(Text)`
    font-size: 16px;
    font-weight: 100;
    font-family: ${(props) => props.theme.fonts.heading};
    padding: 5px 0;
`

export const QuestionWrapper = styled(Text)`
    font-size: 28px;
    font-weight: 500;
    font-family: ${(props) => props.theme.fonts.heading};
    padding: 8px 0;

`
export const SearchInput = styled(TextInput)`
    padding: 8px;
    padding-left: 45px;
    width: 90%;
    border: 2px solid #ddd;
    border-radius: 14px;
`
export const SearchWrapper = styled(View)`
    position: relative;
    flex-direction: row;
    margin: 22px auto;
`

export const SearchIconWrapper = styled(View)`
    position: absolute;
    /* top: 8px;
    left: 8px; */
    padding: 14px;
`