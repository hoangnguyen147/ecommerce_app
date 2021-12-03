import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import styled from "styled-components";

export const HeaderWrapper = styled(View)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
`

export const UserArea = styled(View)`
    /* display: flex; */
    
`

export const AvarImage = styled(Image)`
    width: 30px;
    height: 30px;
    border-radius: 999px;
`

export const None = styled(View)`
    width: 30px;
`