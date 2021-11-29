import { StatusBar } from 'expo-status-bar';
import React, { Suspense } from 'react';
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import AppContainer from './src/navigation/AppNavigation';
import store from './src/redux/store';
import theme from "./src/theme";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
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
 