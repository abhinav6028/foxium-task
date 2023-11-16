
import React from 'react'
import '../Input/input.css';
import { Box, Typography } from '@mui/material';

export default function Input(props) {

    const { label, name, type, register, errorMessage } = props;

    return (
        <Box sx={{ bgcolor: "", width: '100%', height: 35, my: 1.5 }}>


            <input
                style={{ width: '100%', height: '100%' }}
                type={type}
                name={name}
                {...register}
                placeholder={label}
            />

            <Typography sx={{ color: 'red', fontSize: 12 }}>{errorMessage}</Typography>



        </Box>
    )
}