/* eslint-disable import/prefer-default-export */
import axiosService from '../common/axiosService';
import { API_URL } from '../common/defines';
import { buildQueryString } from '../common/utils';

const url = `${API_URL}/users`;

export const fetchAllUsersRequest = (conditon) => {
    const query = buildQueryString(conditon);
    return axiosService.get(`${url}/${query}`);
};
