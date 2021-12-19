import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { PreviewCategoryWrapper, PreviewContent, PreviewLeft, PreviewRight, ShopNow, TextContent } from '../Home.styles';

const PreviewCategory = ({ data, width, ...props}) => {


  return (
    <PreviewCategoryWrapper>
      <PreviewLeft>
        <PreviewContent>
          <TextContent>{data?.description}</TextContent>
          <TouchableOpacity>
            <ShopNow>Mua ngay</ShopNow>
          </TouchableOpacity>
        </PreviewContent>
      </PreviewLeft>
      <PreviewRight style={{ width: width * 0.3, height: 100}} source={{ uri: data?.image }} />
    </PreviewCategoryWrapper>
  )
}


export default PreviewCategory;
