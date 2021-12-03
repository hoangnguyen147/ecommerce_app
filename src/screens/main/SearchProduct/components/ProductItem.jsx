import React from 'react'
import { View, Text } from 'react-native'
import { ItemImage, ProductItemWrapper } from '../SearchProduct.styles'

const ProductItem = ({data, ...props}) => {
    return (
        <ProductItemWrapper style={{width: props.width}}>
            <ItemImage source={require("../../../../../assets/images/g102.jpg")} width={50} />
            
        </ProductItemWrapper>
    )
}

export default ProductItem
