import React from 'react';
import { View } from 'react-native';
import Header2 from '../../../components/Header/Header2';
import Search from '../../../components/Search/Search';
import SafeArea from '../../../components/utils/SafeArea';

function SearchProduct({navigation, ...props}) {
    return (
        <SafeArea>
            <Header2 navigation={navigation} />
            <Search />
        </SafeArea>
    );
}

export default SearchProduct;