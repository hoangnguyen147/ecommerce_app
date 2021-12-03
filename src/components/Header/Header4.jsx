import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import CartIcon from '../../library/icons/CartIcon';
import GoBackIcon from '../../library/icons/GoBackIcon';
import MenuVariant from '../../library/icons/MenuVariant'
import TrashIcon from '../../library/icons/TrashIcon';
import { AvarImage, HeaderWrapper, UserArea } from './Header.styles'

const Header4 = ({ navigation }) => {
    return (
        <HeaderWrapper>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <GoBackIcon />
            </TouchableOpacity>
            <Text>GIỎ HÀNG</Text>
            <TrashIcon />
        </HeaderWrapper>
    )
}

export default Header4;
