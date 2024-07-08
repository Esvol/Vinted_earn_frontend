import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './services/api'
import auth from './slices/auth'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth,
})

export function store(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}

// export const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//     auth,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })

// setupListeners(store.dispatch)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
