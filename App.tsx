import React from 'react';
import styled from 'styled-components/native';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import SignUpScreen from './src/screens/signup.screen';
import NavigationScreen from './src/screens/navigation.screen';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Navigation">
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Navigation" component={NavigationScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
        </PersistGate>
      </Provider>
  );
}

