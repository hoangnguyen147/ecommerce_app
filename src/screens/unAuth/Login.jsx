import React from 'react';
import { Button, ImageBackground, StyleSheet, Pressable, Text, View } from 'react-native';
import { Button as ButtonPaper } from 'react-native-paper';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SafeArea from '../../components/utils/SafeArea';
import { login } from '../../redux/actions/user';
import { AuthWrapper, BackgroundWrapper, ButtonWrapper, MyText } from './UnAuth.styles';



const image = { uri: "https://png.pngtree.com/background/20210715/original/pngtree-creative-colorful-pattern-online-shopping-background-picture-image_1276023.jpg" };

function Login({ navigation, ...props }) {
    return (
        <AuthWrapper>
            <BackgroundWrapper source={image} resizeMode="cover">
                {/* <Button title="Đăng nhập" onPress={() => props.login()} /> */}
                <ButtonWrapper login={true} onPress={() => props.login()}>
                    <MyText>Đăng nhập</MyText>
                </ButtonWrapper>
                <ButtonWrapper onPress={() => navigation.navigate("Register")}>
                    <MyText>Đăng ký</MyText>
                </ButtonWrapper>
            </BackgroundWrapper>
        </AuthWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
});


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    login
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);