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
        name: "SignIn",
        component: Signin,
        options: {
            title: "Đăng nhập",
            headerTitleAlign: 'center',
            headerShown: false
        }
    },
    {
        name: "SignUp",
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
            {screens.map((screenDetail, index) => {
                return (
                    <UnAuth.Screen key={index} {...screenDetail} />
                )
            })}
        </UnAuth.Navigator>
    );
}

export default UnAuthScreen;