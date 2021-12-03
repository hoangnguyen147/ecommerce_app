import { FlatList, Image, View } from "react-native";
import styled from "styled-components";


export const ListProductWrapper = styled(FlatList)`

`

export const ProductItemWrapper = styled(View)`
    margin: 5px auto;
    background-color: blue;
    padding: 5px;
`

export const ItemImage = styled(Image)`
    width: 70px;
    height: 70px;
`

export const ItemContent = styled(View)`

`