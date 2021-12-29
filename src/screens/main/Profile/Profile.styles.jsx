import { Image, Text, View } from "react-native";
import styled from "styled-components";


export const MainProfile = styled(View)`
    padding-top: 5px;
    flex: 1;
    height: 360;
`

export const IntroArea = styled(View)`
    flex-direction: row;
    padding: 25px 20px;
    align-items: center;
`

export const AvatarImage = styled(Image)`
    width: 60px;
    height: 60px;
    border-radius: 999px;
`

export const NameAndEmail = styled(View)`
    padding-left: 14px;
`

export const NameWrapper = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    padding: 5px 0;
    font-size: 15px;
`

export const EmailWrapper = styled(Text)`
    color: #aaa;
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: 13px;
    font-style: italic;
`

export const HorizontalLine = styled(View)`
    border-bottom-color: #ddd;
    border-bottom-width: 1px;
`

export const InfoTitle = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: 15px;
`

export const InfoContent = styled(Text)`
    color: #888;
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: 14px;
    font-style: italic;
`

export const InfoWrapper = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20;
    padding-bottom: 20;
    padding-left: 20;
    padding-right: 20;

`