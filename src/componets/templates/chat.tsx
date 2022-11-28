import React from 'react';
import { StyleSheet } from "react-native";

import { Text,  CustomView } from '../../componets/atoms';

const ChatTemplate = () => {

  return (
    <CustomView
      justifyContent='center'
      alignItems='center' 
      >
        <Text>hola</Text>
    </CustomView>
  );
};

const styles = StyleSheet.create({

})

export default ChatTemplate;