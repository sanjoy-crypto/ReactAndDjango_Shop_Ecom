import { Container } from '@mui/material'
import React from 'react'
import Sliders from '../components/Sliders'
import TrandingProducts from '../components/TrandingProducts'
import CategoryNames from '../components/CategoryNames'
import MostViewedProducts from '../components/MostViewedProducts'
import CategoryProducts from '../components/CategoryProducts'
import BrandNames from '../components/BrandNames'


const HomePage = () => {
    return (
        <>  
        <Sliders />
            <Container>
                <TrandingProducts />
                <CategoryNames />
                <MostViewedProducts />
                <CategoryProducts />
                <BrandNames />
            </Container>
        </>
    )
}

export default HomePage
