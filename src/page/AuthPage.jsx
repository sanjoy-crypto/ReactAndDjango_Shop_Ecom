import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import {domain, postheader} from '../env'
import axios from 'axios'


const AuthPage = () => {
    const [registerNow,setRegisterNow] =useState(false)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')



    const loginNow = async () => {
        await axios({
            method:'post',
            url:`${domain}/api/login/`,
            data:{
                username:email,
                password:password
            }
        }).then(res => {
          
            if(res.data['token']){
                console.log(res.data['token'])
                window.localStorage.setItem('token',res.data['token'])
                window.location.href = '/'
            }
            
        }).catch(_=>{
            alert('Username or Password Incorrect!!!')
        })
    }

    const register = async () => {
        if(password === password2){
            await axios({
                method:'post',
                url:`${domain}/api/register/`,
                headers:postheader,
                data:{
                    'email':email,
                    'password':password,
                }
            }).then(resp => {
                // console.log('Register : ',resp.data);
                if(resp.data['error'] === false){
                    setRegisterNow(false)
                }
                else{
                    alert('Something is Worng !!!')
                }
            })
        }else{
            alert("Two password not matched!!!")
        }
    }

  return <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent='center'
        style={{minHeight:"80vh"}}
        >
            <Typography variant='h5'>
                {registerNow ? "Register Here" : "Login Here"}
            </Typography>
            <Grid item xs={12} sm={6} md={6}>
                <TextField 
                    style={{width:'100%',margin:'10px 0'}}
                    variant='outlined'
                    label='Email'
                    type='text'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField 
                    style={{width:'100%',margin:'10px 0'}}
                    variant='outlined'
                    label='Password'
                    type='password'
                     onChange={(e) => setPassword(e.target.value)}
                />
                {
                    registerNow &&
                    <TextField 
                    style={{width:'100%',margin:'10px 0'}}
                    variant='outlined'
                    label='Confirm Password'
                    type='password'
                    onChange={(e) => setPassword2(e.target.value)}
                />
                }
                {
                    registerNow ?
                    <>
                        <Button onClick={register} variant='contained' color='error'>
                            Register
                        </Button>
                        <Typography style={{display:'block', marginTop:'20px',cursor:'pointer'}} variant='p'>
                            I have an Account? <Typography onClick={()=>setRegisterNow(false)} variant='p' color='error' style={{textDecoration:'underline'}}>Login Here</Typography>
                        </Typography>
                    </> :
                    <>
                     <Button onClick={loginNow} variant='contained' color='error'>
                            Login
                        </Button>
                        <Typography style={{display:'block', marginTop:'20px',cursor:'pointer'}} variant='p'>
                            No Account? <Typography onClick={()=>setRegisterNow(true)} variant='p' color='error' style={{textDecoration:'underline'}}>Register Here</Typography>
                        </Typography>
                    </>
                }
       
            </Grid>
  </Grid>;
};

export default AuthPage;
