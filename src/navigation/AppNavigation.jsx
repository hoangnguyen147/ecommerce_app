import React from 'react';
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './RootNavigation';
import Signup from '../screens/login/signup'
AppContainer.propTypes = {
    
};

function AppContainer(props) {
    return (
        // <NavigationContainer>
        //     <RootNavigation />
        // </NavigationContainer>
        <Signup/>
    );
}

export default AppContainer;