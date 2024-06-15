import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:2000/',
    prepareHeaders(headers) {
        return headers;
    },
    credentials: 'include'
})

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 1});

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    tagTypes: ['User'],
    endpoints: () => ({}),
})