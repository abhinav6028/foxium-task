import { Grid } from '@mui/material'
import React from 'react'
import Imges from '../../Assetst/signup.png'
import { H1, H6 } from '../Ui/Typography'

export default function WelcomeSection() {
    return (
        <Grid container md={6} lg={5} sx={{
            display: { xs: 'none', sm: 'none', md: 'flex' },
            bgcolor: "#173bb5", justifyContent: 'center', alignItems: 'center',
            backgroundSize: 'cover  '
        }}>

            <Grid container sx={{ justifyContent: 'center' }}>

                <H1 colour="#e8c2ac">Welcome Back !</H1>

                <H6 colour="#e8c2ac">To keep connected with us Please signup</H6>


                <Grid lg={8}
                    component='img'
                    src={Imges}
                    sx={{ mt: 3 }}
                />

            </Grid>



        </Grid>
    )
}
