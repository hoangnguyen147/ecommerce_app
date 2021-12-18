import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { useSelector } from 'react-redux';
import Header2 from '../../../components/Header/Header2';
import Search from '../../../components/Search/Search';
import SafeArea from '../../../components/utils/SafeArea';
import ProductItem from './components/ProductItem';

const data = [1, 2, 3, 4, 5, 6, 7]

function SearchProduct({ navigation, ...props }) {
  const { width, height } = useWindowDimensions();
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");

  const products = useSelector(state => state.product.data);

  const filterData = products.filter((item) => {
    return item.name.toLowerCase().includes(value.toLocaleLowerCase())
  })
      
  return (
    <SafeArea>
      <Header2 title="TÌM KIẾM" navigation={navigation} />
      <Search value={value} setValue={setValue} />
      <FlatList
        data={filterData}
        renderItem={({ item, index }) => {

          return (
            <ProductItem navigation={navigation} width={width * 0.9} data={item} key={index} />
          )
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </SafeArea>
  );
}

export default SearchProduct;