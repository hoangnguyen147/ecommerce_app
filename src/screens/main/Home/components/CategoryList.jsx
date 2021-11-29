import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { ButtonCat, CategoryListWrapper } from '../Home.styles';


const CategoryList = ({ data, ...props }) => {
  const [catActive, setCatActive] = useState(0);
  return (
    <CategoryListWrapper>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity key={index} onPress={() => setCatActive(index)}>
              <ButtonCat active={index == catActive}>Tai nghe</ButtonCat>
            </TouchableOpacity>
          )
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </CategoryListWrapper>
  )
}

export default CategoryList;
