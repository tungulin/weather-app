import { configureStore } from '@reduxjs/toolkit'
import { defaultSlice } from './slice/defaultSlice'

export const store = configureStore({
    reducer: {
        default: defaultSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})
