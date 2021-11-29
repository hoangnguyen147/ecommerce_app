import { Button, Image, ImageBackground, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import styled from "styled-components";

export const StartArea = styled(Pressable)`
    margin-top: 15px;
    padding: 0 15px;
`

export const HelloWrapper = styled(Text)`
    font-size: 14px;
    font-weight: 100;
    font-family: ${(props) => props.theme.fonts.heading};
    padding: 4px 0;
`

export const QuestionWrapper = styled(Text)`
    font-size: 25px;
    font-weight: 500;
    font-family: ${(props) => props.theme.fonts.heading};
    padding: 4px 0;

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
    margin: 14px auto;
`

export const SearchIconWrapper = styled(View)`
    position: absolute;
    /* top: 8px;
    left: 8px; */
    padding: 14px;
`

export const MainHome = styled(View)`
    flex: 1;
    background-color: #eee;
    border-top-left-radius : 20px;
    border-top-right-radius : 20px;
    padding: 0 20px;
    padding-top: 22px;
`

// style of category list

export const ButtonCat = styled(Text)`
    padding: 5px 10px;
    height: 30px;
    margin: 0 4px;
    border-radius: 999px;
    color: ${props => props.active  ? "#fff" : "#000"};
    background-color: ${props => props.active  ? props.theme.colors.primary : "transparent"};
`

export const CategoryListWrapper = styled(View)`
    margin-bottom: 14px;
`
// style of preview category list

export const PreviewCategoryWrapper = styled(View)`
    /* width: ${props => props.width}; */
    width: 100%;
    background-color: white;
    flex-direction: row;
    /* justify-content: space-around; */
    align-items: center;
    height: 160;
    border-radius: 20px;
    overflow: hidden;
`

export const PreviewLeft = styled(View)`
    padding-left: 15px;
    width: 60%;

`

export const PreviewContent = styled(View)`
    justify-content: space-between;
`

export const TextContent = styled(Text)`
    font-size: 20px;
    font-family: ${(props) => props.theme.fonts.heading2};
    font-weight: 800;
    padding: 12px 0;
    
`

export const ShopNow = styled(Text)`
    color: ${props => props.theme.colors.primary};
`

export const PreviewRight = styled(Image)`
    height: 160;
    flex-grow: 1;
    /* height: 200px; */
`

