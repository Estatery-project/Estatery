'use client'
import {
    addToFavorites,
    removeFromFavorites,
} from '@/app/store/reducers/favoriteSlice'
import Estate from '@/app/types/Estate'
import { HeartLogo } from '@/public/assets/icons/icons'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

type FavoriteActionsProps = {
    className?: string
    estateData: Estate
}

const FavoriteActions = ({ className, estateData }: FavoriteActionsProps) => {
    const dispatch = useDispatch()
    const favorite = useSelector((state: any) => state?.favorites?.items)
    const isEstateInFavorites = favorite.some(
        (item: Estate) => item?.id === estateData?.id
    )
    console.log(isEstateInFavorites, 'isEstateInFavorites')

    const handleFavoriteAction = () => {
        if (!isEstateInFavorites) {
            dispatch(addToFavorites(estateData))
        } else {
            console.log('Estate already in favorites')
            // Optionally, perform some action or display a message
        }
    }

    const handleRemoveFavoriteAction = () => {
        if (isEstateInFavorites) {
            dispatch(removeFromFavorites(estateData))
        } else {
            console.log('Estate not in favorites')
            // Optionally, perform some action or display a message
        }
    }
    return (
        <div
            className={className}
            onClick={
                isEstateInFavorites
                    ? handleRemoveFavoriteAction
                    : handleFavoriteAction
            }
        >
            <HeartLogo
                className={``}
                fill={`${isEstateInFavorites ? '#7065F0' : ''}`}
            />
        </div>
    )
}

export default FavoriteActions
