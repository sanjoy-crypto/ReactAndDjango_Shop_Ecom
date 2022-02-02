import { Container, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AllProducts from '../components/common/AllProducts'
import { domain } from '../env'

const SingleCategoryProducts = () => {
    const [category,setCategory] = useState()
    const {id} = useParams()
    useEffect(()=>{
        const getproducts = async () => {
            await axios({
                method:'get',
                url:`${domain}/api/singlecategories/${id}/`,
            }).then(resp=>{
                console.log(resp.data[0],'Cate Prod');
                setCategory(resp.data[0])
            })
        }
        getproducts()
    },[])
    return (
        <Container>
            <Grid style={{marginTop:'20px',marginBottom:'40px' }} container direction='column' alignItems='center'>
                <Typography variant='h4'>
                    Category : {category?.title}
                </Typography>
                <Typography variant='p'>
                    {category?.details}
                </Typography>
                <img style={{ width:'100%',height:'auto',padding:'10px' }}  
                src={category?.image}
                alt={category?.title} 
                />
                <AllProducts products={category?.category_products} showall={true} />
            </Grid>
        </Container>
    )
}

export default SingleCategoryProducts


