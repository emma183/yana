import React from 'react';
import { Text, ViewContainer, CustomView, Input, HelperText } from '../componets/atoms';
import Button from '../componets/molecules/button';
import { StyleSheet } from "react-native";
import { useFormik } from "formik";
import {SigNupValidations as validationSchema} from '../validations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setUser } from '../redux/slides/userSlide';
import Tab, { TabItem } from '../componets/molecules/tab';



const NavigationScreen = () => {

  const user = useSelector(selectUser)
  console.log(user)
  const onTabSelected = (index) => {
    console.log(index);
  };
  return (
    <ViewContainer bgColor={'white'} padding={12}>
      <CustomView
        paddingTop={48}
        justifyContent='center'
        alignItems='center' 
        >
          <Tab onTabSelected={onTabSelected}>
            <TabItem>Chat</TabItem>
            <TabItem>Cuenta</TabItem>
          </Tab>
        
      </CustomView>
      <Button 
            styles={styles.button}
            onPress={()=> console.log("hola")} 
          > 
            Crear cuenta
          </Button>
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

export default NavigationScreen;