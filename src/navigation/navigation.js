import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {SCREENS} from '../Utility/Constant';
import Home from '../Feature/Home';
import RequestedMoney from '../Feature/RequestedMoney';
import SendMoney from '../Feature/SendMoney';

const Stack = createStackNavigator();
const MainRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name={SCREENS.HOME} component={Home} />
      <Stack.Screen name={SCREENS.REQUEST_MONEY} component={RequestedMoney} />
      <Stack.Screen name={SCREENS.SEND_MONEY} component={SendMoney} />
    </Stack.Navigator>
  );
};

export default MainRoute;
