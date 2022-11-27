import React from 'react';
import styled from 'styled-components/native';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Challenge from './src';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppContainer>
          <NavigationContainer >
            <Challenge/>
          </NavigationContainer>
        </AppContainer>
      </PersistGate>
    </Provider>
  );
}

const AppContainer = styled.View`
  flex: 1;
  background-color: #ecf0f1;
  align-items: center;
  justify-content: center;
`;
