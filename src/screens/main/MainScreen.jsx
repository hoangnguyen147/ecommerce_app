import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../unAuth/Login';
import Register from '../unAuth/Register';
import Home from './Home/Home';

const Main = createStackNavigator();

const screens = [
    {
        name: "Home",
        component: Home,
    },
]

function MainScreen(props) {
    return (
        <Main.Navigator screenOptions={{headerShown: false}}>
            {screens.map((screenDetail) => {
                return (
                    <Main.Screen {...screenDetail} />
                )
            })}
        </Main.Navigator>
    );
}

export default MainScreen;