import { Container, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AllProducts from '../components/common/AllProducts'
import Headline from '../components/common/Headline'
import SingleBrand from '../components/common/SingleBrand'
import SingleCategory from '../components/common/SingleCategory'
import { domain } from '../env'

const SearchResultPage = () => {
    const [result,setResult] = useState(null)
    const {q} = useParams()
    useEffect(() => {
        const getSearchItem = async () => {
            await axios({
                method:'get',
                url:`${domain}/api/search/${q}/`
            }).then(resp=>{
                console.log('Search Item : ',resp.data);
                setResult(resp.data)
            })
        }
        getSearchItem()
    },[q])
    return (
        <Container style={{marginTop:'30px',marginBottom:'30px'}}>
            <Typography variant='h5' >
            Search Result For : "{q}"
            </Typography>
            <Grid container direction='column'>
                {
                    result?.brand?.length !== 0 &&
                    <Grid container
                    direction='row'
                    justify='center'
                    alignItem = 'center'
                    spacing={2}
                    >
                        <Headline title='Brand' subtitle='Names' />
                        {
                            result?.brand?.map((item,i)=>(
                                <Grid key={i} item xs={6} sm={3} md={2} lg={2}> 
                                    <SingleBrand item={item} />
                                </Grid>
                            ))
                        }
                    </Grid>
                }

                {
                    result?.category?.length !== 0 &&
                    <Grid container
                    direction='row'
                    justify='center'
                    alignItem = 'center'
                    spacing={2}
                    >
                        <Headline title='Category' subtitle='Names' />
                        {
                            result?.category?.map((item,i)=>(
                                <Grid key={i} item xs={6} sm={3} md={2} lg={2}> 
                                   <SingleCategory item={item} />
                                </Grid>
                            ))
                        }
                    </Grid>
                }

                {
                    result?.product?.length !== 0 &&
                    <Grid container
                    direction='row'
                    justify='center'
                    alignItem = 'center'
                    spacing={2}
                    >
                        <Headline title='Search' subtitle='Products' />
                         <AllProducts products={result?.product} showall='true' />
                    </Grid>
                }

            </Grid>
        </Container>
    )
}

export default SearchResultPage
