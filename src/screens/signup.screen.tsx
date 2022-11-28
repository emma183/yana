import React, { useEffect } from 'react';
import { Text, ViewContainer, CustomView, Input, HelperText } from '../componets/atoms';
import Button from '../componets/molecules/button';
import { StyleSheet } from "react-native";
import { useFormik } from "formik";
import {SigNupValidations as validationSchema} from '../validations';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slides/userSlide';

interface IFormSignUp {
  name: string;
  email: string;
  password: string;
}

const SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const handleOnSubmit = (values: IFormSignUp) => {
    const userDispatch = {
      name: values.name,
      email: values.email,
     };
    dispatch(
      setUser(userDispatch),
      formik.resetForm(),
      navigation.navigate('Navigation'),
    )
  }

  const formik = useFormik<IFormSignUp>({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: handleOnSubmit,
    validationSchema,
  });

  return (
    <ViewContainer bgColor={'white'} padding={12}>
      <CustomView 
        paddingTop={68} 
        justifyContent='center'
        alignItems='center' >
        <Text weight={700} size='24px'>Regístrate</Text>
      </CustomView>
      <CustomView
        paddingTop={48}
        justifyContent='center'
        alignItems='center' >
          <Input 
            placeholder="Nombre de usuario" 
            styles={styles.input}
            type='text'
            onChangeText={formik.handleChange('name')}
            value={formik.values.name}
            />
          {formik.errors.name && <HelperText>{formik.errors.name}</HelperText>} 
          <Input
            placeholder="Correo electrónico"
            styles={styles.input}
            type='email'
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
            />
          {formik.errors.email && <HelperText>{formik.errors.email}</HelperText>}
          <Input
            placeholder="Contraseña"
            styles={styles.input}
            type='password'
            secureTextEntry={true}
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
            />
          {formik.errors.password && <HelperText>{formik.errors.password}</HelperText>}
          <Button 
            disabled={!formik.isValid}
            styles={styles.button}
            onPress={()=> handleOnSubmit(formik.values)} 
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

export default SignUpScreen;