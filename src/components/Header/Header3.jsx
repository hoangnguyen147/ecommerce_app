import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import CartIcon from '../../library/icons/CartIcon';
import GoBackIcon from '../../library/icons/GoBackIcon';
import MenuVariant from '../../library/icons/MenuVariant'
import { AvarImage, HeaderWrapper, None, UserArea } from './Header.styles'

const Header3 = ({ navigation }) => {
    return (
        <HeaderWrapper>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <GoBackIcon />
            </TouchableOpacity>
            <Text>PROFILE</Text>
            <TextInput style={{opacity: 0, height: 0}} />
        </HeaderWrapper>
    )
}

export default Header3;
