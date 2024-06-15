import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { StaticImageData } from 'next/image'
import { authApi } from '../services/auth'

export type Item = {
    type: 'cap' | 'tshirt' | 'trousers' | 'sneakers' | 'timer',
    level: number,
    speed: number,
    title: string,
    headline: string,
    text: string,
    image: string | StaticImageData,
}

export type User = {
    _id: string,
    googleId: string,
    email: string,
    displayName: string,
    createdAt: string,
    updatedAt: string,
    coins: number,
    inventory: Item[],
    friends: string[],
    isStarted: boolean,
}

type InitialStateProps = {
    user: User | null,
    status: 'pending' | 'success' | 'rejected'
}

const initialState: InitialStateProps = {
    user: null,
    status: 'pending',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addMatcher(authApi.endpoints.current.matchFulfilled, (state, action) => {
            state.user = action.payload;
            state.status = 'success';
          })
        .addMatcher(authApi.endpoints.current.matchRejected, (state, action) => {
            state.user = null;
            state.status = 'rejected'
        })
        .addMatcher(authApi.endpoints.current.matchPending, (state, action) => {
            state.status = 'pending'
        })
    },
})

export const selectUser = (state: RootState) => state.auth.user

export default authSlice.reducer