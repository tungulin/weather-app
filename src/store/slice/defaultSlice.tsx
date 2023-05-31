import { createSlice } from '@reduxjs/toolkit'
import { IDefaultSliceState } from './ISlice'

const initialState: IDefaultSliceState = {
    isOpenSidebar: false
}

export const defaultSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        toogleSidebar: state => { state.isOpenSidebar = !state.isOpenSidebar },
        // increment: (state, action: PayloadAction<number>) => state + action.payload
    },
})

export const { toogleSidebar } = defaultSlice.actions