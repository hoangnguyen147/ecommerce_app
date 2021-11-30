import React from 'react';
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './RootNavigation';
AppContainer.propTypes = {
    
};

function AppContainer(props) {
    return (
        <NavigationContainer>
            <RootNavigation />
        </NavigationContainer>
        
    );
}

export default AppContainer;