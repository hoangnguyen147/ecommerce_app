import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CancelIcon from '../../../../library/icons/CancelIcon'
import MoreVerticalIcon from '../../../../library/icons/MoreVerticalIcon'
import StarFilled from '../../../../library/icons/StarFilled'
import { ItemContent, ItemImage, ItemName, ItemPrice, ProductItemWrapper, StarWrapper, VoteWrapper } from '../SearchProduct.styles'

const ProductItem = ({data, width, ...props}) => {
    return (
        <ProductItemWrapper style={{width: width}}>
            <ItemImage source={require("../../../../../assets/images/g102.jpg")} style={{width: width * 0.24, height: width * 0.24}} />
            <ItemContent>
                <ItemName>Chuột gaming Logitech G102</ItemName>
                <ItemPrice>300.000 VNĐ</ItemPrice>
                <VoteWrapper>
                    <StarWrapper>
                        <StarFilled />
                        <Text style={{paddingLeft: 4}}>4.9</Text>
                    </StarWrapper>
                    <TouchableOpacity>
                      <MoreVerticalIcon />
                    </TouchableOpacity>
                </VoteWrapper>
            </ItemContent>
        </ProductItemWrapper>
    )
}

export default ProductItem
