import { Card, CardActionArea, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {  useNavigate } from 'react-router-dom'

const SingleBrand = ({item}) => {

    const navigate = useNavigate()

    const showBrandProduct = () => {
        navigate(`/brand-${item?.title}-${item?.id}`)
    }

    return (
        <CardActionArea onClick={showBrandProduct}>
            <Card style={{
                width:'100%',
                height:'100px',
                // backgroundColor:"#6275A3",
                backgroundImage:`url(${item?.image})`,
                backgroundSize:'100% 100%',

                padding:'5px',
                color:'white'
            }}>
                <Box style={{
                    width:'100%',
                    height:'100%',
                    display:'flex',
                    alignItems:'center',
                    textAlign:'center'
                }}>
                    
                    {/* <Typography variant='h5'>{item?.title}</Typography> */}
          
                </Box>
            </Card>
        </CardActionArea>
    )
}

export default SingleBrand
