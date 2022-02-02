import { Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const SliderItem = ({item}) => {
    return (
        <Paper
        style={{
            height:'500px',
            width:'100%',
            backgroundImage:`url(${item?.image})`,
            backgroundSize:'cover',
            backgroundPosition:'center'
        }}
        >
            <Grid
            style={{
                position:'absolute',
                left:'50%',
                top:'50%',
                transform:'translate(-50%,-50%)',
            }}
            >
                <Typography variant='h3'>
                    {item?.name}
                </Typography>
                <Typography variant='h6' style={{
                    color:'#FF5733',
                }}>
                    {item?.details}
                </Typography>
                <Button variant='contained' style={{marginTop:'5px'}} color="error">Shop Now</Button>
            </Grid>
        </Paper>
    )
}

export default SliderItem
