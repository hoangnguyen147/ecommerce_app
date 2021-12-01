import { Button, FlatList, Image, ImageBackground, Pressable, ScrollView, Text, TextInput, View } from "react-native";
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

export const MainHome = styled(View)`
    flex: 1;
    background-color: ${props => props.theme.colors.bg.secondary};
    border-top-left-radius : 20px;
    border-top-right-radius : 20px;
    /* padding: 0 20px; */
    padding-top: 16px;
`

export const ProductWrapper = styled(View)`
    width: 100%;
    margin-top: 4px;
    padding: 2px;
`

export const ToolArea = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    padding: 4px 0;
    margin: 0 12px;
`

export const BestSellerWrapper = styled(Text)`
    font-size: 13px;
    color: black;
`

export const SeeAllWrapper = styled(Text)`
    font-size: 13px;
    color: ${props => props.theme.colors.secondary};
`

export const ProductArea = styled(View)`
    flex-direction: row;
    justify-content: space-between;
`

export const BaseProductCardWrapper = styled(View)`
    background-color: white;
    border-radius: 20px;
    padding:  8px 6px;
    align-items: center;
    /* margin: 10px; */
`

export const ProductImage = styled(Image)`
    height: 110px;
`

export const ProductName = styled(Text)`

`

export const ProductPrice = styled(Text)`

`


// style of category list

export const ButtonCat = styled(Text)`
    padding: 5px 10px;
    height: 30px;
    margin: 0 4px;
    border-radius: 999px;
    color: ${props => props.active ? "#fff" : props.theme.colors.secondary};
    background-color: ${props => props.active ? props.theme.colors.primary : "transparent"};
`

export const CategoryListWrapper = styled(View)`
    margin: 0 12px;
    margin-bottom: 14px;
`
// style of preview category list

export const PreviewCategoryWrapper = styled(View)`
    width: 90%;
    background-color: white;
    flex-direction: row;
    /* justify-content: space-around; */
    align-items: center;
    height: 160;
    border-radius: 20px;
    overflow: hidden;
    margin: 0 auto;

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

// best seller style

export const ListBestSeller = styled(FlatList)`
    margin: 0 auto;
    padding: 0;
    flex: 1;
`

