import { api } from "./api";
import { User } from "../slices/auth";
import { Reward } from "../../../cards";

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
        claimCoins: builder.mutation<User, {coins: number, time: number}>({
            query: (data) => ({
                url: '/claim-coins',
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['User'],
        }),
        updateItem: builder.mutation<User, {type: string, title: string, level: number, speed: number, image: string, price: number}>({
            query: (data) => ({
                url: '/update',
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['User'],
        }),
        claimAchievement: builder.mutation<User, {type: string, level: number, reward: Reward, rewardType: string}>({
            query: (data) => ({
                url: '/claim-achievement',
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['User'],
        }),
        swapForDiscount: builder.mutation<User, {type: string, amount: number, price: number}>({
            query: (data) => ({
                url: '/swap-for-discount',
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['User'],
        }),
        useDiscount: builder.mutation<User, {id: string}>({
            query: (data) => ({
                url: '/use-discount',
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['User'],
        }),
    })
});

export const { 
    useCurrentQuery, 
    useIsStartedMutation, 
    useClaimCoinsMutation, 
    useUpdateItemMutation,
    useClaimAchievementMutation, 
    useSwapForDiscountMutation,
    useUseDiscountMutation
} = authApi

export const { 
    endpoints: {
        current, 
        isStarted, 
        claimCoins,
        updateItem, 
        claimAchievement,
        swapForDiscount,
        useDiscount
    } 
} = authApi