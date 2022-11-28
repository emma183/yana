import {createSlice} from '@reduxjs/toolkit';

export enum ChatUser {
    Yana = '9329114e-f0b3-4012-9125-eae353ab0c11',
    Patient = '9eaa946b-bb55-4fc5-b77b-ec503587bb2c',
}

const initialState = {
    chat: []
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChat: (state, action) => {
            state.chat = action.payload;
        },
        setAddMessageObject: (state, action) => {
            state.chat.push(action.payload);
        },
        setDeleteChat: (state) => {
            state.chat = [];
        }
    }
});

export const {setChat, setAddMessageObject, setDeleteChat} = chatSlice.actions;
export const selectChat = (state) => state.chat.chat;
export default chatSlice.reducer;
