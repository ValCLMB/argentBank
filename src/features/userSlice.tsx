import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type User = {
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
};

const initialState: User = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
        },
    },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
