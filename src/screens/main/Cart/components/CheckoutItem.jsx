import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ItemContent, ItemName, ItemPrice } from '../../SearchProduct/SearchProduct.styles'
import { CartItemWrapper, CartToolsWrapper, CheckoutItemWrapper, Quantity, QuantityWrapper, ToolsWrapper } from '../Cart.styles'
import { formatterVnd } from '../../../../utils/formatNumber';

const CheckoutItem = ({ data, width, ...props }) => {  

  return (
    <CheckoutItemWrapper style={{ width: width }}>
      <Image source={{ uri: data.image }} style={{ width: width * 0.24, height: width * 0.24 }} />
      <ItemContent>
        <ItemName>{data.order + " " + data.name}</ItemName>
        <ItemPrice>{formatterVnd(data.price * data.order)}</ItemPrice>
       
      </ItemContent>
    </CheckoutItemWrapper>
  )
}

export default CheckoutItem
