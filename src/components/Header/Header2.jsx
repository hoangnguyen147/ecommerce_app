import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import CartIcon from '../../library/icons/CartIcon';
import GoBackIcon from '../../library/icons/GoBackIcon';
import MenuVariant from '../../library/icons/MenuVariant'
import { AvarImage, HeaderWrapper, UserArea } from './Header.styles'

const Header2 = ({ navigation, title }) => {
    return (
        <HeaderWrapper>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <GoBackIcon />
            </TouchableOpacity>
            <Text>{title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <CartIcon />
            </TouchableOpacity>
        </HeaderWrapper>
    )
}

export default Header2
