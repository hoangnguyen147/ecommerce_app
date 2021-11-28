import React from 'react'
import { View, Text } from 'react-native'
import MenuVariant from '../../library/icons/MenuVariant'
import { AvarImage, HeaderWrapper, UserArea } from './Header.styles'

const Header = () => {
    return (
        <HeaderWrapper>
            <MenuVariant />
            <Text>LOGO</Text>
            <AvarImage source={require("../../../assets/images/avar.jpg")} />
        </HeaderWrapper>
    )
}

export default Header
