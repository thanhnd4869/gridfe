import { fetchAllUsersThunk } from '../thunks/user.thunk';

/* eslint-disable import/prefer-default-export */
export const usersReducer = (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
        .addCase(fetchAllUsersThunk.pending, (state) => {
            state.error = null;
        })
        .addCase(fetchAllUsersThunk.fulfilled, (state, action) => {
            state.userList.push(action.payload);
        })
        .addCase(fetchAllUsersThunk.rejected, (state, action) => {
            state.error = action.error.message;
        });
};
