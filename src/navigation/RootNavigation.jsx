import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/main/MainScreen';
import UnAuthScreen from '../screens/unAuth/UnAuthScreen';
import { connect } from 'react-redux';

const RootStack = createStackNavigator();

function RootNavigation({ token, ...props }) {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {token ? (
                <RootStack.Screen
                    name="Main"
                    component={MainScreen}
                />
            ) : (
                <RootStack.Screen
                    name="Auth"
                    component={UnAuthScreen}
                />
            )}
        </RootStack.Navigator>
    );
}

const mapStateToProps = (state) => ({
    token: state.user.token
});

const mapDispatchToProps = {
  
};


export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation);