import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { domain } from '../env'
import AllProducts from './common/AllProducts'
import Headline from './common/Headline'

const CategoryProducts = () => {
     const [categoryProducts, setCategoryProducts] = useState(null)
    useEffect(()=>{
        const getData = async () => {
            await axios({
                method:'get',
                url:`${domain}/api/categoryproduct/`
            }).then(resp=>{
                // console.log('Category Products : ',resp.data);
                setCategoryProducts(resp.data)
            })
        }
        getData()
    },[])
    return (
       <Grid container direction='column'>
           {
               categoryProducts?.map((item,i)=>(
                   <Box key={i} container='div'>
                       <>
                        <Headline title={item?.title} subtitle='Products' />
                            <AllProducts products={item?.category_products}
                            categorytitle={item?.title} categoryid={item?.id} />
                       </>
                   </Box>
               ))
           }
       </Grid>
    )
}

export default CategoryProducts
