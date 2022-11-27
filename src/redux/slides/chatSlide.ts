import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    chat: null
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChat: (state, action) => {
            state.chat = action.payload;
        }
    }
});

export const {setChat} = chatSlice.actions;
export const selectChat = (state) => state.chat.chat;
export default chatSlice.reducer;
