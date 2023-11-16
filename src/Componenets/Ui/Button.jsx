import { Typography, Grid } from '@mui/material'
import React from 'react'

export default function Button(props) {

    const { width, bgcolor } = props


    return (

        <Grid container lg={12} sx={{ height: 35, bgcolor: bgcolor ? bgcolor : "#173bb5", justifyContent: 'center', alignItems: 'center', borderRadius: '10px' }}>

            <button style={{
                background: 'transparent',
                width: width ? width : '100%',
                height: '100%', border: '0px',
                cursor: 'pointer'
            }}>
                <Typography sx={{ textAlign: 'center', color: "#ffff", fontWeight: 'bold' }}>{props.children}</Typography>
            </button>

        </Grid >

    )
}
