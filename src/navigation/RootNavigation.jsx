import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/main/MainScreen';
import UnAuthScreen from '../screens/unAuth/UnAuthScreen';
import { connect } from 'react-redux';
import Signin from '../screens/login/signin'
import Signup from '../screens/login/signup';
const RootStack = createStackNavigator();

function RootNavigation() {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="signin" component={Signin} options={{title:'signin'}}/>
            <RootStack.Screen name="signup" component={Signup} options={{title:'signup'}}/>
        </RootStack.Navigator>
    );
}




export default RootNavigation;