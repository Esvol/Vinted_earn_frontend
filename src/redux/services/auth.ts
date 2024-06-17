import { api } from "./api";
import { User } from "../slices/auth";

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        current: builder.query<User, void>({
            query: () => ({
                url: '/current',
                method: 'GET',
            }),
            providesTags: ['User'],
        }),
        isStarted: builder.mutation<User, void>({
            query: () => ({
                url: '/is-started',
                method: 'PATCH',
            }),
            invalidatesTags: ['User'],
        }),
        claimCoins: builder.mutation<User, {coins: number}>({
            query: (data) => ({
                url: '/claim',
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['User'],
        }),
        updateItem: builder.mutation<User, {type: string, level: number, speed: number, image: string, price: number}>({
            query: (data) => ({
                url: '/update',
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['User'],
        }),
    })
});

export const { useCurrentQuery, useIsStartedMutation, useClaimCoinsMutation, useUpdateItemMutation} = authApi

export const { endpoints: {current, isStarted, claimCoins, updateItem} } = authApi