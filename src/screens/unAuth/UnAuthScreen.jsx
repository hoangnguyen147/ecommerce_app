import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../unAuth/Login';
import Register from '../unAuth/Register';

const UnAuth = createStackNavigator();

const screens = [
    {
        name: "Login",
        component: Login,
        options: {
            title: "Đăng nhập",
            headerTitleAlign: 'center',
            headerShown: false
        }
    },
    {
        name: "Register",
        component: Register,
        options: {
            title: "Đăng ký",
            headerTitleAlign: 'center',
        }
    },
]

function UnAuthScreen(props) {
    return (
        <UnAuth.Navigator screenOptions={{
            // headerShown: false,
        }}>
            {screens.map((screenDetail) => {
                return (
                    <UnAuth.Screen {...screenDetail} />
                )
            })}
        </UnAuth.Navigator>
    );
}

export default UnAuthScreen;