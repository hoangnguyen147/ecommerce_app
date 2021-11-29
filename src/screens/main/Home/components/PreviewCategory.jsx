import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { PreviewCategoryWrapper, PreviewContent, PreviewLeft, PreviewRight, ShopNow, TextContent } from '../Home.styles';

const PreviewCategory = () => {


  return (
    <PreviewCategoryWrapper>
      <PreviewLeft>
        <PreviewContent>
          <TextContent>TMA-2 Modular Headphone</TextContent>
          <TouchableOpacity>
            <ShopNow>Mua ngay</ShopNow>
          </TouchableOpacity>
        </PreviewContent>
      </PreviewLeft>
      <PreviewRight source={require("../../../../../assets/images/headphone.png")} />
    </PreviewCategoryWrapper>
  )
}


export default PreviewCategory;
