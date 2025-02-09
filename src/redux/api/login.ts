import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://dummyjson.com/';
const LOGIN_ENDPOINT = 'auth/login';

interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse extends User {
  accessToken: string;
  refreshToken: string;
}

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: LOGIN_ENDPOINT,
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: any): LoginResponse => {
        console.log('API response:', response);
        return response as LoginResponse;
      },
    }),
  }),
});

export const { useLoginMutation } = loginApi;
