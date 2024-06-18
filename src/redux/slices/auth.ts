import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { authApi } from '../services/auth'

export type inventoryItem = {
    type: 'cap' | 'tshirt' | 'trousers' | 'sneakers' | 'time',
    level: number,
    speed: number,
    image: string,
}

export type TotalData = {
    totalClaimedCoins: number,
    totalReferrals: number,
    totalClaimedReferralCoins: number,
    totalSpendedTime: number,
    totalUpgradedLevels: number,
    totalSwaps: number,
}

export type Achievement = {
    type: 'fashion' | 'friendship' | 'timekeeper',
    level: number,
}

export type User = {
    _id: string,
    googleId: string,
    email: string,
    displayName: string,
    createdAt: string,
    updatedAt: string,
    balance: number,
    tickets: number,
    inventory: inventoryItem[],
    totalData: TotalData,
    achievements: Achievement[],
    referrals: string[],
    referralLink: string,
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