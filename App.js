import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import colorCode from './src/Utility/colorCode';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainRoute from './src/navigation/navigation';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colorCode.primary}
        barStyle={'light-content'}
      />
      <SafeAreaProvider>
        <NavigationContainer>
          <MainRoute />
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorCode.white,
  },
});
export default App;
