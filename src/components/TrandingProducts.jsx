import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { domain } from '../env'
import Headline from '../components/common/Headline'
import SingleProduct from './common/SingleProduct'

const TrandingProducts = () => {
    const [trendingProduct,setTrendingProduct] = useState(null)
    useEffect(()=>{
        const getData = async () => {
            await axios({
                method:'get',
                url:`${domain}/api/trendingproducts/`
            }).then(resp => {
                // console.log(resp.data,"Trending Product");
                setTrendingProduct(resp.data)
            })
        }
        getData()
    },[])

    return (
       <Grid container spacing={2}>
           <Headline title='Trending' subtitle='Products' />
           {
               trendingProduct?.map((item,i)=>(
                   <Grid style={{marginTop:'10px',marginBottom:'25px'}} key={i} md={2} sm={4} item>
                       <SingleProduct product={item?.product} />
                   </Grid>
               ))
            
           }
       </Grid>
    )
}

export default TrandingProducts
