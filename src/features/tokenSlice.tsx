import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Token = {
    token: string | null;
};

const initialState: Token = {
    token: null,
};

export const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        remove: (state) => {
            state.token = null;
        },
    },
});

export const { add, remove } = tokenSlice.actions;
export default tokenSlice.reducer;
