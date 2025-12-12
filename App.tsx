import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './src/navigation/MainNavigation';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle='dark-content'/>
      <MainNavigation />
    </SafeAreaProvider>
  );
};

export default App;