import React from 'react';
import { StyleSheet } from "react-native";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { CustomView, TextByChat, ScrollView } from '../../componets/atoms';
import { ChatUser, selectChat, setAddMessageObject } from '../../redux/slides/chatSlide';
import Button from '../molecules/button';

const ChatTemplate = () => {
    const chat = useSelector(selectChat)
    const dispatch = useDispatch();

    const handleOnSendMessaggess = () => {
        const message = {
            id: ChatUser.Patient,
            name: 'Jane',
            message: 'Hola, como estas?',
        }
        dispatch(setAddMessageObject(message));
    }

  return (
    <ViewContainerChat>
        <ScrollView>
            {chat.map((item, index) => (
                <CustomView
                    key={index}
                    marginTop='auto'
                    justifyContent={item.id === ChatUser.Yana ? 'flex-start' :'flex-end' }
                    alignItems={item.id === ChatUser.Yana ? 'flex-start' :'flex-end' }
                >
                    <TextByChat 
                        bgColor={item.id === ChatUser.Yana ? '#F0F6FA' :  '#3B9391' }
                        color={item.id === ChatUser.Yana ? '#4B5959' :  'white' }
                        >
                            {item.message}
                    </TextByChat>
                </CustomView>
            ))}
        </ScrollView>
        <Button
            styles={styles.button}
            onPress={handleOnSendMessaggess}      
        >
            add
            </Button>
    </ViewContainerChat>
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
        marginTop: 50,
      }
})

const ViewContainerChat = styled.View`
    flex: 1;
`;

export default ChatTemplate;