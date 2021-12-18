import React from 'react';
import { Button, FlatList, ScrollView, Text, TouchableOpacity, useWindowDimensions, View, StyleSheet, Dimensions, LogBox, Image, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import SafeArea from '../../../components/utils/SafeArea';
import { login, logout } from '../../../redux/actions/user';
import Header from '../../../components/Header/Header';
import {
  BaseProductCardWrapper, BestSellerWrapper, ButtonCat, HelloWrapper, ListBestSeller, MainHome,
  ProductArea, ProductImage, ProductName, ProductWrapper, QuestionWrapper, SearchIconWrapper, SearchInput, SearchWrapper,
  SeeAllWrapper, StartArea, ToolArea
} from './Home.styles';
import SearchIcon from '../../../library/icons/SearchIcon';
import { useState } from 'react';
import CategoryList from './components/CategoryList';
import PreviewCategory from './components/PreviewCategory';
import Search, { SearchFake } from '../../../components/Search/Search';
import { useEffect } from 'react';
import { getListProduct } from '../../../api/product.api';
import store from '../../../redux/store';
import { getListCategory } from '../../../api/category.api';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../../redux/actions/product';
import { useSelector } from 'react-redux';
import { getCategories } from '../../../redux/actions/category';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function Home({ navigation, ...props }) {
  const { width, height } = useWindowDimensions();
  // const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState("");

  const dispatch = useDispatch();

  const products = useSelector(state => state.product.data);


  useEffect(async () => {
    /* const res = await testApi();
    console.log(res, "res"); */
    // getAllProduct();    
    dispatch(getProducts());
    dispatch(getCategories());
  }, [])


  return (
    <SafeArea>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header navigation={navigation} />
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
                data={products}
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
                      <ProductImage style={{ width: width * 0.3, height: 100}} source={{ uri: item.image }} />
                      <ProductName>
                        {item.name}
                      </ProductName>
                    </BaseProductCardWrapper>
                  )
                }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
              {/* {products.map((item, index) => {
                // console.log(item.image)
                return (
                  <BaseProductCardWrapper
                    key={index}
                    style={{ width: width * 0.42, marginLeft: width * (index % 2 ? 0.03 : 0.05), marginRight: width * (index % 2 ? 0.05 : 0.03), marginVertical: 8 }}
                  >
                    <ProductImage style={{width: 100, height: 100}}source={{ uri: item.image }} />
                    <ProductName>
                      {item.name}
                    </ProductName>
                  </BaseProductCardWrapper>
                )
              })} */}
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
  },
  bestSeller: {
    margin: "0 auto",
    padding: 0,
    flex: 1
  }

})




export default Home;


