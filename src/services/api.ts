/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BACKEND_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUserById: builder.query<GetUserByIdResponse, string>({
      query: (userId) => ({
        url: `users/${userId}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: `users`,
        method: "POST",
        body,
      }),
      transformErrorResponse: (response) => response.data,
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: `auth`,
        method: "POST",
        body,
      }),
      transformErrorResponse: (response) => response.data,
    }),
    updateUser: builder.mutation<UpdateResponse, UpdateRequest>({
      query: ({ userId, payment, active, scratchCards }) => ({
        url: `users/${userId}`,
        method: "PATCH",
        body: { payment, active, scratchCards },
      }),
      invalidatesTags: ["User"],
      transformErrorResponse: (response) => response.data,
    }),
    createPaymentSession: builder.mutation<any, { amount: number }>({
      query: ({ amount }) => ({
        url: `payments`,
        method: "POST",
        body: { amount },
      }),
      invalidatesTags: ["User"],
      transformErrorResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useRegisterMutation,
  useLoginMutation,
  useUpdateUserMutation,
  useCreatePaymentSessionMutation
} = api;
