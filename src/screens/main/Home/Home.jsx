import React from 'react';
import { Button, FlatList, ScrollView, Text, TouchableOpacity, useWindowDimensions, View, StyleSheet, Dimensions, LogBox } from 'react-native';
import { connect } from 'react-redux';
import SafeArea from '../../../components/utils/SafeArea';
import { login, logout } from '../../../redux/actions/user';
import CartIcon from '../../../library/icons/CartIcon';
import Header from '../../../components/Header/Header';
import { BaseProductCardWrapper, BestSellerWrapper, ButtonCat, HelloWrapper, ListBestSeller, MainHome, ProductArea, ProductImage, ProductName, ProductWrapper, QuestionWrapper, SearchIconWrapper, SearchInput, SearchWrapper, SeeAllWrapper, StartArea, ToolArea } from './Home.styles';
import SearchIcon from '../../../library/icons/SearchIcon';
import { useState } from 'react';
import CategoryList from './components/CategoryList';
import PreviewCategory from './components/PreviewCategory';
import Search, { SearchFake } from '../../../components/Search/Search';
import { useEffect } from 'react';
import { testApi } from '../../../api/baseApi';
import axios from 'axios';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function Home({ navigation, ...props }) {
  const { width, height } = useWindowDimensions();

  const basePaddingHor = "0 " + (width * 0.05 + "px");

  console.log(basePaddingHor)

  useEffect(async () => {
    /* const res = await testApi();
    console.log(res, "res"); */


  }, [])

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['VirtualizedList: missing keys for items']);
  }, [])


  return (
    <SafeArea>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <StartArea>
          <HelloWrapper>Xin chào Huy Hoàng,</HelloWrapper>
          <QuestionWrapper>Bạn tìm kiếm sản phẩm gì hôm nay ?</QuestionWrapper>
        </StartArea>
        <SearchFake onPress={() => navigation.navigate('Search')} />
        <MainHome>
          <CategoryList data={data} />
          <PreviewCategory width={width} />
          <ProductWrapper>
            <ToolArea>
              <BestSellerWrapper>BEST SELLER</BestSellerWrapper>
              <SeeAllWrapper>See All</SeeAllWrapper>
            </ToolArea>


            <View>
              <ListBestSeller
                data={data}
                horizontal={true}
                contentContainerStyle={styles.container}
                // numColumns={2}
                // scrollEnabled={false}
                renderItem={({ item, index }) => {
                  return (
                    <BaseProductCardWrapper
                      key={index}
                      style={{ width: width * 0.42, marginLeft: width * (index % 2 ? 0.03 : 0.05), marginRight: width * (index % 2 ? 0.05 : 0.03), marginVertical: 8 }}
                    >
                      <ProductImage source={require("../../../../assets/images/headphone.png")} />
                      <ProductName>
                        TMA-2 HD Wireless
                      </ProductName>
                    </BaseProductCardWrapper>
                  )
                }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </ProductWrapper>

        </MainHome>
      </ScrollView>
      {/* <Button title="Đăng xuất" onPress={() => props.logout()} /> */}

    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between"
  },
  itemWrapper: {
    // paddingHorizontal: 10
  }

})


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  logout
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);


