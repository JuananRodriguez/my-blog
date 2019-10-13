/*

import { requestApi } from "./requestApi";

export const getUsers = async ( idUser, filters ) => {
    let url = `api/v1/user/`;
    url += idUser ? idUser : '';
    return await requestApi({
        method: 'GET',
        url: url
    });
};

*/

export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"