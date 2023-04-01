/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllUsersRequest } from '../../callAPIs/user';

export const fetchAllUsersThunk = createAsyncThunk('user/fetchAllUsers', async () => {
    try {
        const response = await fetchAllUsersRequest({
            page: 1,
            limit: 50,
        });
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || 'Có lỗi xảy ra.');
    }
});
