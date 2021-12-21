import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MinusIcon from '../../../../library/icons/MinusIcon'
import PlusIcon from '../../../../library/icons/PlusIcon'
import TrashIcon from '../../../../library/icons/TrashIcon'
import { ItemContent, ItemName, ItemPrice } from '../../SearchProduct/SearchProduct.styles'
import { CartItemWrapper, CartToolsWrapper, Quantity, QuantityWrapper, ToolsWrapper } from '../Cart.styles'
import { formatterVnd } from '../../../../utils/formatNumber';
import { useDispatch } from 'react-redux'
import { changeQuantity } from '../../../../redux/actions/cart'

const CartItem = ({ data, width, ...props }) => {
  const dispatch = useDispatch();
  

  return (
    <CartItemWrapper style={{ width: width }}>
      <Image source={{ uri: data.image }} style={{ width: width * 0.24, height: width * 0.24 }} />
      <ItemContent>
        <ItemName>{data.name}</ItemName>
        <ItemPrice>{formatterVnd(data.price * data.order)}</ItemPrice>
        <CartToolsWrapper>
          <QuantityWrapper>
            <ToolsWrapper onPress={() => dispatch(changeQuantity({ product_id: data.id, type: "plus" }))}>
              <PlusIcon />
            </ToolsWrapper>
            <Quantity>{data.order}</Quantity>
            <ToolsWrapper disabled={data.order == 1} onPress={() => dispatch(changeQuantity({ product_id: data.id, type: "minus" }))}>
              <MinusIcon disable={data.order == 1} />
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
