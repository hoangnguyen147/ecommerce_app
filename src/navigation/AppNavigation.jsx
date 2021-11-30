import React from 'react';
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './RootNavigation';
import styled from 'styled-components';
import { View } from 'react-native';

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

const AppWrapper = styled(View)`
    padding-top: 20px;
`