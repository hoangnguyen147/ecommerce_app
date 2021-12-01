import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import CartIcon from '../../library/icons/CartIcon';
import GoBackIcon from '../../library/icons/GoBackIcon';
import MenuVariant from '../../library/icons/MenuVariant'
import { AvarImage, HeaderWrapper, UserArea } from './Header.styles'

const Header2 = ({ navigation }) => {
    return (
        <HeaderWrapper>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <GoBackIcon />
            </TouchableOpacity>
            <Text>TÌM KIẾM</Text>
            <CartIcon />
        </HeaderWrapper>
    )
}

export default Header2
