import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CancelIcon from '../../../../library/icons/CancelIcon'
import MoreVerticalIcon from '../../../../library/icons/MoreVerticalIcon'
import StarFilled from '../../../../library/icons/StarFilled'
import { formatterVnd } from '../../../../utils/formatNumber'
import { ItemContent, ItemImage, ItemName, ItemPrice, ProductItemWrapper, StarWrapper, VoteWrapper } from '../SearchProduct.styles'

const ProductItem = ({data, width, navigation, ...props}) => {
    
    return (
        <ProductItemWrapper style={{width: width}}>
            <ItemImage source={{ uri: data.image }} style={{width: width * 0.24, height: width * 0.24}} />
            <ItemContent>
                <ItemName>{data.name}</ItemName>
                <ItemPrice>{formatterVnd(data.price)}</ItemPrice>
                <VoteWrapper>
                    <StarWrapper>
                        <StarFilled />
                        <Text style={{paddingLeft: 4}}>{data.vote}</Text>
                    </StarWrapper>
                    <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", {
                        data: data
                    })}>
                      <MoreVerticalIcon />
                    </TouchableOpacity>
                </VoteWrapper>
            </ItemContent>
        </ProductItemWrapper>
    )
}

export default ProductItem
