import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { Grid} from '@mui/material';
import Input from '../Input/Input';
import Button from '../Ui/Button';




export default function SignUp() {
    const schema = yup.object({
        fullname: yup.string().required("Name is required!").min(2, "Name is too short").max(10, "Name is too long"),
        email: yup.string().email().required("email is required"),
        password: yup.string().min(8, 'Password must be at least 8 characters')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
            .required('Password is required'),
        password_varification: yup.string().oneOf([yup.ref("password")], "Confirm Password")
    })

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema)
        }
    );

    // console.log("formState", errors);


    const onSubmit = (data) => {

        console.log(data);

        localStorage.setItem("data", JSON.stringify(data));

    };


    return (
        <Grid container sx={{
            // bgcolor: { xs: 'blue', sm: "green", md: "red" },
            justifyContent: 'center', alignItems: 'center'
        }}>

            <Grid container xs={7} lg={4.5} sx={{ bgcolor: 'white', justifyContent: 'center', alignItems: 'center' }}>

                <Grid container sx={{ justifyContent: 'center', }}>

                    <form action="" style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>

                        <Grid container sx={{ justifyContent: 'center' }}>


                            <Input
                                type="text"
                                name="fullname"
                                label="Full name"
                                register={{ ...register("fullname") }}
                                errorMessage={errors.fullname?.message}
                            />



                            <Input
                                type="text"
                                name="email"
                                label="Email"
                                register={{ ...register("email") }}
                                errorMessage={errors.email?.message}
                            />

                            <Input
                                type="password"
                                name="password"
                                label="Password"
                                register={{ ...register("password") }}
                                errorMessage={errors.password?.message}
                            />



                            <Input
                                type="password"
                                name="password_varification"
                                label="Reenter password"
                                register={{ ...register("password_varification") }}
                                errorMessage={errors.password_varification?.message}
                            />


                            <Grid container sx={{ mt: 2 }}>
                                <Button type='submit'> Signup </Button>
                            </Grid>

                        </Grid>
                    </form>
                </Grid>

            </Grid>

        </Grid>

    )
}

