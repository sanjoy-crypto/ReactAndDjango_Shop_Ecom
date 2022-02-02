import { DoubleArrowSharp } from '@mui/icons-material'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SingleProduct from './SingleProduct'

const AllProducts = ({products,showall=false,categorytitle,categoryid}) => {

    const navigate = useNavigate()

    const showCategoryProduct = () => {
        navigate(`category-${categorytitle}-${categoryid}`)
    }

    return (
        <Grid container spacing={2}
        style={{
            marginTop:'15px'
        }}
        >
            {
                products?.map((item,i)=>(
                    <>
                        {showall ? (
                     
                             <Grid key={i} item md={2} sm={4}>
                                    <SingleProduct product={item} />
                            </Grid>
                           
                        ):(
                            <>
                            {
                                i <= 4 && (
                                      <Grid key={i} item md={2} sm={4}>
                                                <SingleProduct product={item} />
                                        </Grid>
                                )
                            }
                            </>
                        )}
                    </>


                 
                ))
            }
            {
                (products?.length > 5 && !showall) && 
                <Grid item
                md={2}
                sm={4}
                style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <Button onClick={showCategoryProduct}>
                        <Typography>See More </Typography>
                        <DoubleArrowSharp />
                    </Button>
                </Grid>
            }
        </Grid>
    )
}

export default AllProducts
