import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Header2 from '../../../components/Header/Header2';
import Search from '../../../components/Search/Search';
import SafeArea from '../../../components/utils/SafeArea';
import ProductItem from './components/ProductItem';

const data = [1,2,3,4,5,6,7]

function SearchProduct({navigation, ...props}) {
    const { width, height } = useWindowDimensions();
    const [search, setSearch] = useState("");


    return (
        <SafeArea>
            <Header2 navigation={navigation} />
            <Search />
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                  
                  return (
                    <ProductItem width={width * 0.9} data={item} key={index} />
                  )
                }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </SafeArea>
    );
}

export default SearchProduct;