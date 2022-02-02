import { Visibility } from '@mui/icons-material'
import { Button, Card, Container, Grid, IconButton, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {domain, getheader} from '../env'
import { Send } from '@mui/icons-material'
import SingleReview from '../components/common/SingleReview'

const ProductDetails = () => {
    const [product,setProduct] = useState(null)
    const [reviewInput,setReviewInput] = useState(null)
    console.log('Review : ',reviewInput);
    const {id} = useParams()
    useEffect(()=>{
        const getDetails = async () => {
            await axios({
                method:'get',
                url:`${domain}/api/productdetails/${id}/`
            }).then(resp => {
                // console.log(resp.data[0],'PRoduct Details');
                setProduct(resp.data[0])
            })
        }
        getDetails()
    },[])

    useEffect(()=>{
        const getProductView = async () => {
            await axios({
                method:'post',
                url:`${domain}/api/productview/`,
                data:{
                    'id':id
                }
            }).then(resp => {
                // console.log('Product View : ',resp.data);
                setProduct(resp.data)
            })
        }
        getProductView()
    },[])

    const sendReview = async () => {
        await axios({
            method:'post',
            url:`${domain}/api/addreview/`,
            headers: getheader,
            data:{
                p_id : id,
                review : reviewInput
            }
        }).then(resp => {
            console.log(resp.data,'Review @@@@@');
            setReviewInput('')
        })
    }

    return (
        <div>
           <Container>
               <Card style={{marginTop:'30px',marginBottom:'30px'}}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={5} lg={5}>
                            <img style={{ width:'100%',height:'auto' }} src={product?.image} alt={product?.title} />
                        </Grid>
                        <Grid style={{padding:'30px 20px'}} item xs={12} sm={12} md={7} lg={7}>
                        
                           <Box>
                                <Typography style={{ marginBottom:'10px' }} variant='h5'>{product?.title}</Typography>

                                {
                                    product?.category?.map((item,i)=>(
                                        <Typography variant='p' key={i}>{item?.title}, </Typography>
                                    ))
                                }

                           </Box>
                           <Box style={{ marginTop:'20px' }}>
                               <Typography style={{padding:'10px 20px',background:'#f2f2f2',marginRight:'10px'}} variant='p' >Brand : {product?.brand?.title} </Typography>
                               {
                                   product?.discount && 
                                   <Typography style={{padding:'10px 20px',background:'#f2f2f2'}} variant='p' >Discount : {product?.discount}% </Typography>

                               }
                           </Box>
                           <Box style={{ marginTop:'25px' }}>
                               <Typography variant='p' style={{color:'red', textDecoration:'line-through',marginRight:'22px',fontSize:'20px'}}>
                                   {product?.old_price} Tk
                               </Typography>
                               <Typography variant='p' style={{fontSize:'22px'}}>
                                   {product?.price} Tk
                               </Typography>
                           </Box>
                            <Box style={{ marginTop:'20px' }}>
                                <Button size='large'  variant='contained' color='error' style={{ marginRight:'10px' }}>Add to Cart</Button>
                                <Button endIcon={<Visibility />} size='large' variant='outlined'>{product?.view}</Button>
                            </Box>
                            <Box style={{ marginTop:'20px',textAlign:'justify' }}>
                                <Typography variant='p'>
                                    {product?.details}
                                </Typography>
                            </Box>
                            
                            <Typography style={{ marginTop:'20px' }} variant='h5' align='center'>
                               Reviews
                            </Typography>

                            <Box style={{margin:'20px 0'}}>
                               <TextField 
                                onChange={(e)=>setReviewInput(e.target.value)}
                                value={reviewInput}
                                label = 'Add Review..'
                                style={{width:'100%'}}
                                variant='outlined'
                                InputProps={{
                                   endAdornment:(
                                       <IconButton onClick={sendReview}>
                                           <Send />
                                       </IconButton>
                                           
                                       
                                   )
                               }}
                               />

                               {
                                   product?.review?.map((item,i)=>(
                                        <SingleReview key={i} item={item} />
                                   ))
                               }
                            </Box>
                        </Grid>
                    </Grid>
               </Card>
           </Container>
        </div>
    )
}

export default ProductDetails
