import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MinusIcon from '../../../../library/icons/MinusIcon'
import PlusIcon from '../../../../library/icons/PlusIcon'
import TrashIcon from '../../../../library/icons/TrashIcon'
import { ItemContent, ItemName, ItemPrice } from '../../SearchProduct/SearchProduct.styles'
import { CartItemWrapper, CartToolsWrapper, Quantity, QuantityWrapper, ToolsWrapper } from '../Cart.styles'
import { formatterVnd } from '../../../../utils/formatNumber';

const CartItem = ({ data, width, ...props }) => {
  console.log(data)
  return (
    <CartItemWrapper style={{ width: width }}>
      <Image source={{uri: data.image}} style={{ width: width * 0.24, height: width * 0.24 }} />
      <ItemContent>
        <ItemName>{data.name}</ItemName>
        <ItemPrice>{formatterVnd(data.price)}</ItemPrice>
        <CartToolsWrapper>
          <QuantityWrapper>
            <ToolsWrapper>
              <PlusIcon />
            </ToolsWrapper>
            <Quantity>1</Quantity>
            <ToolsWrapper>
              <MinusIcon />
            </ToolsWrapper>
          </QuantityWrapper>
          <TouchableOpacity>
            <TrashIcon isBlur={true} />
          </TouchableOpacity>
        </CartToolsWrapper>
      </ItemContent>
    </CartItemWrapper>
  )
}

export default CartItem
