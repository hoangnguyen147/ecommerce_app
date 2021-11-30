import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../unAuth/Login';
import Register from '../unAuth/Register';
import Signup from '../login/signup';
import Signin from '../login/signin';


const UnAuth = createStackNavigator();

const screens = [
    {
        name: "Login",
        component: Signin,
        options: {
            title: "Đăng nhập",
            headerTitleAlign: 'center',
            headerShown: false
        }
    },
    {
        name: "Register",
        component: Signup,
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