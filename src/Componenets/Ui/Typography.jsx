import { Typography } from '@mui/material'
import React from 'react'

export const H1 = (props) => {

    const { colour } = props

    return (
        <Typography
            sx={{
                fontSize: { xs: 40, lg: 40 },
                fontWeight: 'bold',
                width: '100%', textAlign: 'center',
                color: colour ? colour : "#173bb5",
            }}
        >{props.children}</Typography>
    )

}


export const H6 = (props) => {

    const { colour } = props

    return (
        <Typography sx={{
            fontSize: { xs: 12, lg: 15 }, width: '100%',
            fontWeight: 'bold', textAlign: 'center',
            color: colour ? colour : "#173bb5",
        }}>{props.children}</Typography>
    )
}
