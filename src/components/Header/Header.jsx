import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CartIcon from '../../library/icons/CartIcon'
import MenuVariant from '../../library/icons/MenuVariant'
import { AvarImage, HeaderWrapper, UserArea } from './Header.styles'

const Header = ({ navigation }) => {
  return (
    <HeaderWrapper>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <AvarImage source={require("../../../assets/images/avar.jpg")} />
      </TouchableOpacity>
      <Text>LOGO</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <CartIcon />
      </TouchableOpacity>
    </HeaderWrapper>
  )
}

export default Header
