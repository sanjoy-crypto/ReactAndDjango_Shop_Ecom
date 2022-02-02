import axios from 'axios'
import React, { useEffect,useState } from 'react'
import Headline from './common/Headline'
import {domain} from '../env'
import { Grid } from '@mui/material'
import SingleCategory from './common/SingleCategory'

const CategoryNames = () => {
    const [category, setCategory] = useState(null)
    useEffect(()=>{
        const getData = async () => {
            await axios({
                method:'get',
                url:`${domain}/api/categories/`
            }).then(resp=>{
                // console.log('Category names : ',resp.data);
                setCategory(resp.data)
            })
        }
        getData()
    },[])

    return (
        <Grid container spacing={3}>
            <Headline title="All" subtitle="Category" />
            {
                category?.map((item,i)=>(
                    <Grid key={i} item xs={6} sm={3} md={2} lg={2}> 
                        <SingleCategory item={item} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default CategoryNames
