import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {domain} from '../env'
import Headline from './common/Headline'
import SingleBrand from './common/SingleBrand'

const BrandNames = () => {
    const [brands,setBrands] = useState(null)

    useEffect(()=>{
        const getBrands = async () => {
            await axios({
                method:'get',
                url:`${domain}/api/brands/`
            }).then(resp => {
                // console.log('Brands Data : ',resp.data);
                setBrands(resp.data)
            })
        }
        getBrands()
    },[])

    return (
        <Grid style={{marginTop:'15px', marginBottom:'40px'}} container spacing={3}>
            <Headline title="All" subtitle="Brands" />
          {
              brands !== null &&
              brands?.map((item,i)=>(
                    <Grid key={i} item xs={6} sm={3} md={2} lg={2}> 
                        <SingleBrand item={item} />
                    </Grid>
              ))
          }
        </Grid>
    )
}

export default BrandNames
