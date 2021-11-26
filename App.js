import { StatusBar } from 'expo-status-bar';
import React, { Suspense } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import AppContainer from './src/navigation/AppNavigation';
import store from './src/redux/store';
import theme from "./src/theme";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Suspense fallback={null}>
            <AppContainer />
          </Suspense>
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
 