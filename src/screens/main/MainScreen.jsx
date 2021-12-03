import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import CartIcon from '../../library/icons/CartIcon';
import Login from '../unAuth/Login';
import Register from '../unAuth/Register';
import Cart from './Cart/Cart';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import ProductDetail from './ProductDetail/ProductDetail';
import SearchProduct from './SearchProduct/SearchProduct';

const Main = createStackNavigator();

const screens = [
    {
        name: "Home",
        component: Home,
    },
    {
        name: "Search",
        component: SearchProduct,
    },
    {
        name: "Profile",
        component: Profile,
    },
    {
        name: "ProductDetail",
        component: ProductDetail,
    },
    {
        name: "Cart",
        component: Cart,
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