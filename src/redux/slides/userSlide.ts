import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: {
        name: "emmanuel"
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const {setUserLoginDetails} = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
