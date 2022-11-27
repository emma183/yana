import React from 'react';
import { StyleSheet } from "react-native";
import { useSelector } from 'react-redux';

import { Text,  CustomView } from '../../componets/atoms';
import Button from '../../componets/molecules/button';
import { selectUser } from '../../redux/slides/userSlide';



const AccountTemplate = () => {
  const user = useSelector(selectUser)

  return (
    <CustomView
      justifyContent='center'
      alignItems='center' 
      >
      <Text>Nombre de usuario</Text>
      <Text>{user.name}</Text>
      <Text>Correo electrónico</Text>
      <Text>{user.email}</Text>
        <Button 
            styles={styles.button}
            onPress={()=> console.log("hola")} 
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