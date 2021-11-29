import React from 'react';
import { Button, FlatList, ScrollView, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { connect } from 'react-redux';
import SafeArea from '../../../components/utils/SafeArea';
import { login, logout } from '../../../redux/actions/user';
import CartIcon from '../../../library/icons/CartIcon';
import Header from '../../../components/Header/Header';
import { ButtonCat, HelloWrapper, MainHome, QuestionWrapper, SearchIconWrapper, SearchInput, SearchWrapper, StartArea } from './Home.styles';
import SearchIcon from '../../../library/icons/SearchIcon';
import { useState } from 'react';
import CategoryList from './components/CategoryList';
import PreviewCategory from './components/PreviewCategory';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function Home({ ...props }) {
    const { width, height } = useWindowDimensions();


    return (
        <SafeArea>
            <Header />
            <StartArea>
                <HelloWrapper>Xin chào Huy Hoàng,</HelloWrapper>
                <QuestionWrapper>Bạn tìm kiếm sản phẩm gì hôm nay ?</QuestionWrapper>
            </StartArea>
            <SearchWrapper>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <SearchInput placeholder="Tìm kiếm sản phẩm" />
            </SearchWrapper>
            <MainHome>
                {/* <View> */}
                <CategoryList data={data} />
                <PreviewCategory width={width} />
                {/* </View> */}
                {/* <Button title="Đăng xuất" onPress={() => props.logout()} /> */}
            </MainHome>
        </SafeArea>
    );
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    logout
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);


