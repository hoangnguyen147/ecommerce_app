import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import { ButtonCat, CategoryListWrapper } from '../Home.styles';
import PreviewCategory from './PreviewCategory';


const CategoryList = ({ width, ...props }) => {
  const [catActive, setCatActive] = useState(0);
  const categories = useSelector(state => state.category.data);

  return (
    <View>
      <CategoryListWrapper>
        <FlatList
          data={categories}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity key={index} onPress={() => setCatActive(index)}>
                <ButtonCat active={index == catActive}>{item.name}</ButtonCat>
              </TouchableOpacity>
            )
          }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </CategoryListWrapper>
      <PreviewCategory data={categories[catActive]} width={width} />
    </View>
  )
}

export default CategoryList;
