import { Grid } from '@mui/material'
import React from 'react'
import { H1, H6 } from '../Ui/Typography'
import SignUp from '../SignUp/SignUp';


export default function FormSection() {

    

    return (
        <Grid container md={6} lg={7} sx={{ bgcolor: " ", justifyContent: 'center' }}>

            <Grid container sx={{
                bgcolor: "", justifyContent: 'center',
                alignItems: { xs: 'center', sm: 'center', md: '', lg: '' },
                mt: { lg: -10 }
            }}>

                <Grid>

                    <H1>Student Signup</H1>

                    <H6>Hey enter your details to create your account</H6>

                    <Grid container sx={{ mt: 1 }}>

                        <SignUp />

                    </Grid>

                </Grid>


            </Grid>

        </Grid >
    )
}
