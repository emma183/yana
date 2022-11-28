import React, { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { CustomView, TextByChat, ScrollView, ViewContainerChat, Input } from '../../componets/atoms';
import { ChatUser, selectChat, setAddMessageObject } from '../../redux/slides/chatSlide';
import { selectUser } from '../../redux/slides/userSlide';
import Button from '../molecules/button';

const ChatTemplate = () => {
    const chat = useSelector(selectChat)
    const user = useSelector(selectUser)

    const dispatch = useDispatch();
    const [message, setMessage] = useState<string | null>(null);

    const handleOnSendMessaggess = () => {
        const messagePatient = {
            id: ChatUser.Patient,
            name: user?.name,
            message: message,
        }
        dispatch(setAddMessageObject(messagePatient));
        const messageYana = {
            id: ChatUser.Yana,
            name: 'Yana',
            message: 'Hola, estoy bien, y tu?',
    } 
    dispatch(setAddMessageObject(messageYana));
    setMessage(null);
    }

  return (
    <ViewContainerChat>
        <ScrollView>
            {chat.length > 0 && chat.map((item, index) => (
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
        <CustomView 
            flexDirection='row'
            marginTop={24}
        >
            <Input
                placeholder='Ingresa aquí tu mensaje'
                styles={styles.input}
                type='text'
                onChangeText={setMessage}
                value={message}
            />
        <Button
            disabled={message === null}
            styles={message ===  null ? styles.buttonDisabled : styles.button}
            onPress={handleOnSendMessaggess}      
        >a
            </Button>
            </CustomView>
    </ViewContainerChat>
  );
};

const styles = StyleSheet.create({
    button:{
        backGroundColor: '#FF8755',
        textSize: '16px',
        borderRadius: 50,
        width: '56px',
        height: '56px',
        fontSize: '20px',
        fontWeight: 'bold',
        textColor: '#672A11',
      },
      buttonDisabled:{
        backGroundColor: '#C4C4C4',
        textSize: '30px',
        borderRadius: 50,
        width: '56px',
        height: '56px',
        fontSize: '20px',
        fontWeight: 'bold',
        textColor: '#FFFFFF',
        },
    input:{
        backgroundColor: '#FFFFFF',
        borderRadius: 28,
        width: '271px',
        height: '56px',
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
        marginRight: 16,
    }
})



export default ChatTemplate;