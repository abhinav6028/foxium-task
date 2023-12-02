import React from 'react'
import { Grid } from '@mui/material';
import FormSection from './Componenets/Home/FormSection';
import WelcomeSection from './Componenets/Home/WelcomeSection';


export default function App() {
  
  return (
    <Grid container sx={{ height: '100vh' }}>

      <WelcomeSection />

      <FormSection />



    </Grid>
  )

}


