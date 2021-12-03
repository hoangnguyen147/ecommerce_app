import { FlatList, Image, Text, View } from "react-native";
import styled from "styled-components";


export const ListProductWrapper = styled(FlatList)`

`

export const ProductItemWrapper = styled(View)`
    margin: 5px auto;
    /* background-color: blue; */
    padding: 5px;
    flex-direction: row;
    align-items: center;
`

export const ItemImage = styled(Image)`
    /* width: 70px;
    height: 70px; */
`

export const ItemContent = styled(View)`
    padding-left: 10px;
    flex: 1;
`

export const ItemName = styled(Text)`
    padding: 4px 0;
`

export const ItemPrice = styled(Text)`
    padding: 4px 0;

`

export const VoteWrapper = styled(View)`
    padding: 4px 0;
    flex-direction: row;
    justify-content: space-between;
    /* background-color: green; */

`

export const StarWrapper = styled(View)`
    flex-direction: row;
`