import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { domain } from '../env'
import Headline from './common/Headline'
import SingleProduct from './common/SingleProduct'

const MostViewedProducts = () => {
    const [products,setProducts] = useState(null)

    useEffect(()=>{
        const getMostViewProducts = async () => {
            await axios({
                method:'get',
                url:`${domain}/api/mostproductview/`,
            }).then(resp => {
                // console.log('Most View Product : ',resp.data);
                setProducts(resp.data)
            })
        }
        getMostViewProducts()
    },[])

    return (
       <Grid container spacing={2}>
           <Headline title='Most Viewed' subtitle='Products' />
           {
               products?.map((item,i)=>(
                   <Grid style={{marginTop:'10px',marginBottom:'25px'}} key={i} md={2} sm={4} item>
                       <SingleProduct product={item?.product} />
                   </Grid>
               ))
            
           }
       </Grid>
    )
}

export default MostViewedProducts
