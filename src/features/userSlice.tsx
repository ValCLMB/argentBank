import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type User = {
    user: {
        firstName: string | undefined;
        lastName: string | undefined;
        email: string | undefined;
    };
};

const initialState: User = {
    user: {
        firstName: undefined,
        lastName: undefined,
        email: undefined,
    },
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<User>) => {
            state.user = action.payload.user;
        },
    },
});

export const { add } = userSlice.actions;
export default userSlice.reducer;
