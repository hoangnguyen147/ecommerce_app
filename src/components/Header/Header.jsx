import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MenuVariant from '../../library/icons/MenuVariant'
import { AvarImage, HeaderWrapper, UserArea } from './Header.styles'

const Header = ({ navigation }) => {
  return (
    <HeaderWrapper>
      <MenuVariant />
      <Text>LOGO</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <AvarImage source={require("../../../assets/images/avar.jpg")} />
      </TouchableOpacity>
    </HeaderWrapper>
  )
}

export default Header
