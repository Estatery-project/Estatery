import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Estate from '@/app/types/Estate'

// export interface CounterState {
//     value: number
// }

type RootState = {
    items: Estate[]
}

const initialState: RootState = {
    items: [],
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            console.log(action.payload)

            const elementIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            )

            if (elementIndex == -1) {
                state.items.push({ ...action.payload })
            }
        },
        removeFromFavorites: (state, action) => {
            const elementIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            )

            if (elementIndex >= 0) {
                state.items.splice(elementIndex, 1)
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { removeFromFavorites, addToFavorites } = favoriteSlice.actions

export default favoriteSlice.reducer
