import React from 'react';
import { Button, Text } from 'react-native';
import { connect } from 'react-redux';
import SafeArea from '../../../components/utils/SafeArea';
import { login, logout } from '../../../redux/actions/user';
import CartIcon from '../../../library/icons/CartIcon';
import Header from '../../../components/Header/Header';
import { HelloWrapper, QuestionWrapper, SearchIconWrapper, SearchInput, SearchWrapper, StartArea } from './Home.styles';
import SearchIcon from '../../../library/icons/SearchIcon';




function Home({ ...props }) {
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
            <CartIcon />
            <Button title="Đăng xuất" onPress={() => props.logout()} />
        </SafeArea>
    );
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    logout
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);


