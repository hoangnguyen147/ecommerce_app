import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import CartIcon from '../../library/icons/CartIcon';
import Login from '../unAuth/Login';
import Register from '../unAuth/Register';
import Home from './Home/Home';
import ProductDetail from './ProductDetail/ProductDetail';
import SearchProduct from './SearchProduct/SearchProduct';

const Main = createStackNavigator();

const screens = [
    {
        name:"ProductDetail",
        component:ProductDetail,
    },
    {
        name: "Home",
        component: Home,
    },
    {
        name: "Search",
        component: SearchProduct,
    },
]

function MainScreen(props) {
    return (
        <Main.Navigator screenOptions={{ headerShown: false }}>
            {screens.map((screenDetail, index) => {
                return (
                    <Main.Screen key={index} {...screenDetail} />
                )
            })}
        </Main.Navigator>
    );
}

export default MainScreen;