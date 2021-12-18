import React from 'react';
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './RootNavigation';
import styled from 'styled-components';
import { View } from 'react-native';
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';

AppContainer.propTypes = {

};

function AppContainer(props) {
    const token = useSelector(state => state);

    console.log("token", token)

    return (
        <NavigationContainer>
            <RootNavigation token={token} />
        </NavigationContainer>

    );
}

export default AppContainer;

