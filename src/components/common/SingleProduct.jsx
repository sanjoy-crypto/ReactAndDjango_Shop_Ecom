import { AddShoppingCart } from '@mui/icons-material'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleProduct = ({product}) => {

    const navigate = useNavigate()

    const productDetails = () => {
        navigate(`/details-${product?.title}-${product?.id}`)
    }

    return (
        <Card>
           <CardActionArea onClick={productDetails}>
                <CardMedia
                    component='img' height={200} image={product?.image}
                />
           </CardActionArea>
           <CardActionArea onClick={productDetails}>
               <CardContent>
                   <Typography className='productTitle' align='center' variant='h6'>
                       {product?.title}
                   </Typography>
                   <Typography align='center'>
                       {
                           product?.old_price && 
                           <Box component='span'
                           style={{
                               fontSize:'small',
                               textDecoration:'line-through',
                               color:'red',
                               padding:'5px'
                           }}>
                               Tk {product?.old_price}
                           </Box>
                       }
                        <Box component='span'
                           style={{
                               fontSize:'small',
                               padding:'5px'
                           }}>
                               Tk {product?.price}
                           </Box>
                   </Typography>
               </CardContent>
           </CardActionArea>
           <CardActions style={{
               justifyContent:'center'
           }}>
               <Button variant='outlined' size='medium' color='error' endIcon={<AddShoppingCart />} >
                   Add To Cart
               </Button>
           </CardActions>
        </Card>
    )
}

export default SingleProduct
