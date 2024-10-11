import React from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password")
        }

        console.log('userdata', userData)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs = {12}>
                    <TextField
                    required
                    id='email'
                    name='email'
                    label = 'Email'
                    autoComplete = 'email'
                    fullWidth/>
                </Grid>
                <Grid item xs = {12}>
                    <TextField
                    required
                    id='password'
                    name='password'
                    label = 'Password'
                    autoComplete = 'password'
                    fullWidth/>
                </Grid>
                <Grid item xs = {12}>
                    <Button 
                    className='bg-[#9155fd] w-full'
                    type= 'submit'
                    variant='contained'
                    size='large'
                    sx={{padding: ".8rem 0", bgcolor: "#9155fd"}}>Login</Button>
                </Grid>
            </Grid>
        </form>
        <div className='flex justify-center flex-col items-center'>
            <div className='py-3 flex items-center'>
                <p>if you don't have account?</p>
                <Button onClick= {() => navigate("/register")} className='ml-5' sx={{marginTop: "4px"}} size='small'>Register</Button>
            </div>
        </div>
    </div>
  )
}
export default LoginForm