import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import CartIcon from '../../library/icons/CartIcon'
import MenuVariant from '../../library/icons/MenuVariant'
import Truck from '../../library/icons/Truck'
import { AvarImage, HeaderWrapper, UserArea } from './Header.styles'

const Header = ({ navigation, avatar }) => {
  return (
    <HeaderWrapper>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <MenuVariant />
      </TouchableOpacity>
      <TextInput style={{opacity: 0, height: 0}} />
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <AvarImage source={{ uri: avatar || "https://hoangnguyen147.sgp1.digitaloceanspaces.com/images/doanky5/default2.png" }} />
      </TouchableOpacity>
      {/* <Text>LOGO</Text> */}
    </HeaderWrapper>
  )
}

export default Header
