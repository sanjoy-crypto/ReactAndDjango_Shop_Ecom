import { Card, CardActionArea, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {  useNavigate } from 'react-router-dom'

const SingleCategory = ({item}) => {

    const navigate = useNavigate()

    const showCategoryProduct = () => {
        navigate(`/category-${item?.title}-${item?.id}`)
    }

    return (
        <CardActionArea onClick={showCategoryProduct}>
            <Card style={{
                width:'100%',
                height:'100px',
                backgroundColor:"#6275A3",
                backgroundImage:`url(${item?.image})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                padding:'5px',
                color:'white',

            }}>
                <Box style={{
                    width:'100%',
                    height:'100%',
                    display:'flex',
                    alignItems:'center',
                    textAlign:'center'
                }}>
                    
                    <Typography style={{fontWeight:'medium',color:'white'}} variant='h5'>{item?.title}</Typography>
          
                </Box>
            </Card>
        </CardActionArea>
    )
}

export default SingleCategory
