import React from 'react';
import { StyleSheet } from "react-native";
import { useSelector } from 'react-redux';

import { Text,  CustomView, ImageCircle } from '../../componets/atoms';
import Button from '../../componets/molecules/button';
import { selectUser } from '../../redux/slides/userSlide';
import {persistor} from '../../redux/store';


const AccountTemplate = () => {
  const user = useSelector(selectUser)

  const purge = async() => {
   await persistor.pause();
     await persistor.flush().then(() => {
        return  persistor.purge();
      });
}

  return (
    <CustomView
      justifyContent='center'
      alignItems='center' 
      >
      <ImageCircle
        marginTop={48}         
        source={{ uri: "https://i.ibb.co/GVWcC0d/yana.png" }}
        />
      <Text
        marginTop={48}
        size='12px'
        weight={700}
        >
          Nombre de usuario
      </Text>
      <Text
        weight={700}
        >
          {user.name}
      </Text>
      <Text
        marginTop={32}
        size='12px'
        weight={700}
        >
          Correo electrónico
      </Text>
      <Text
          weight={700}
        >
          {user.email}
      </Text>
      <Button 
        styles={styles.button}
        onPress={() => purge()} 
        > 
          Cerrar Sesion
      </Button>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  button:{
    backGroundColor: '#FF8755',
    textSize: '16px',
    borderRadius: 32,
    width: '327px',
    height: '64px',
    fontSize: '16px',
    fontWeight: 'bold',
    textColor: '#672A11',
    marginTop: 170,
  }
})

export default AccountTemplate;