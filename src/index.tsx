import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { Text, ViewContainer, CustomView } from './componets/atoms';
import Button from './componets/molecules/button';
import {useGetAvatar} from './hooks/useGetAvatar';
import { selectUser, setUser } from './redux/slides/userSlide';


// Más instrucciones en https://yanatechnologies.notion.site/Frontend-Challenge-9427a4f79be54b5bb8c3ace2dd93a414
const Challenge = () => {
  const yanaAvatar = useGetAvatar('yana');
  const user = useSelector(selectUser)

  return (
    <ViewContainer bgColor={'white'} padding={12}  >
      <CustomView 
        paddingTop={68} 
        justifyContent='center'
        alignItems='center' >
        <Text size='24px'>Registrate</Text>
        <Button 
          bgColor='#FF8755' 
          onPress={()=> console.log("hola")} 
          textSize='16px'
          borderRadius='32px'
          width='327px'
          height='64px'
        > 
          Crear cuenta
        </Button>
      </CustomView>
    </ViewContainer>
  );
};

export default Challenge;