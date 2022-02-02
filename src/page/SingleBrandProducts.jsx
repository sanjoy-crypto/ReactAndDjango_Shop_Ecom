import { Container, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AllProducts from '../components/common/AllProducts'
import { domain } from '../env'

const SingleBrandProducts = () => {
    const [brandProducts,setBrandProducts] = useState(null)
    const {id} = useParams()
    useEffect(()=>{ 
        const getProducts = async () => {
            await axios({
                method:'get',
                url:`${domain}/api/brandproducts/${id}/`
            }).then(resp => {
                console.log('Brands PRoducts : ',resp.data[0]);
                setBrandProducts(resp.data[0])
            })
        }
        getProducts()
    },[])
    return (
        <Container>
            <Grid container direction='column' alignItems='center' style={{marginTop:'20px',marginBottom:'40px'}}>
                {/* <Typography variant='h4'>Brand : {brandProducts?.title}</Typography>

                <Typography variant='p'> {brandProducts?.details}</Typography> */}

                <img style={{width:'300px',backgroundColor:'#f2f3f3',height:'300px',padding:'10px'}} src={brandProducts?.image} alt={brandProducts?.title} />

                <AllProducts products={brandProducts?.brand_products} showall={true} />

            </Grid>
        </Container>
    )
}

export default SingleBrandProducts
