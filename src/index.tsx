import React from 'react';
import { Text, ViewContainer, CustomView, Input } from './componets/atoms';
import Button from './componets/molecules/button';
import { StyleSheet } from "react-native";

const Challenge = () => {
  return (
    <ViewContainer bgColor={'white'} padding={12}  >
      <CustomView 
        paddingTop={68} 
        justifyContent='center'
        alignItems='center' >
        <Text size='24px'>Registrate</Text>
      </CustomView>
      <CustomView
        paddingTop={48}
        justifyContent='center'
        alignItems='center' >
          <Input 
            placeholder="Nombre de usuario" 
            styles={styles.input}
            type='text'
            />
          <Input
            placeholder="Correo electrónico"
            styles={styles.input}
            type='email'
            />
          <Input
            placeholder="Contraseña"
            styles={styles.input}
            type='password'
            secureTextEntry={true}
            />
          <Button 
            styles={styles.button}
            onPress={()=> console.log("hola")} 
          > 
            Crear cuenta
          </Button>
      </CustomView>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  input:{
    backgroundColor: '#F0F6FA',
    width: '327px',
    height: '64px',
    borderRadius: 32,
    marginBottom: 12,
  },
  button:{
    backGroundColor: '#FF8755',
    textSize: '16px',
    borderRadius: 32,
    width: '327px',
    height: '64px',
    fontSize: '16px',
    fontWeight: 'bold',
    textColor: '#672A11',
    marginTop: 215,
  }
})

export default Challenge;