import { createSlice } from '@reduxjs/toolkit';
import { usersReducer } from '../reducers/user.reducer';
import { fetchAllUsersThunk } from '../thunks/user.thunk';

// Create extra action
const createExtraActions = () => {
    return {
        fetchAllUsers: fetchAllUsersThunk,
    };
};
const extraActions = createExtraActions();

const slice = createSlice({
    // A name, used in action types
    name: 'user',
    // The initial state for the reducer
    initialState: {
        userList: [],
        error: null,
    },
    // An object of "case reducers". Key names will be used to generate actions.
    reducers: {},
    // A "builder callback" function used to add more reducers, or
    // an additional object of "case reducers", where the keys should be other
    // action types
    extraReducers: usersReducer,
});

// Exports
export const userActions = { ...slice.actions, ...extraActions };
export const userReducer = slice.reducer;
