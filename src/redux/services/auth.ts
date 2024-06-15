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
        isStarted: builder.mutation<void, void>({
            query: () => ({
                url: '/is-started',
                method: 'POST',
            }),
            invalidatesTags: ['User'],
        }),
    })
});

export const { useCurrentQuery, useIsStartedMutation} = authApi

export const { endpoints: {current, isStarted} } = authApi