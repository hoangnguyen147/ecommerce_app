import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import styled from "styled-components";

export const ButtonWrapper = styled(Pressable)`
    background-color: ${(props) => props.login ? props.theme.colors.ui.success : props.theme.colors.ui.secondary};
    padding: 10px;
    /* text-align: center; */
    width: 180px;
    border-radius: 30px;
    margin: 12px auto;
`

export const MyText = styled(Text)`
    text-align: center;
    color: white;
    font-size: 20px;
`

export const BonusWrapper = styled(View)`
`

export const AuthWrapper = styled(ImageBackground)`
    flex: 1;
`

export const BackgroundWrapper = styled(ImageBackground)`
    flex: 1;
    justify-content: center;
`