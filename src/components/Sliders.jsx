import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { domain } from '../env'
import Carousel from 'react-material-ui-carousel'
import SliderItem from './common/SliderItem'

const Sliders = () => {
    const [sliders,setSliders] = useState(null)
    useEffect(()=>{
        const getData = async () => {
            await axios({
                method:'get',
                url:`${domain}/api/sliders/`
            }).then(resp => {
                // console.log(resp.data,"Slider");
                setSliders(resp.data)
            })
        }
        getData()
    },[])

    return (
        <Carousel
        interval='4000'
        stopAutoPlayOnHover = 'true'
        > 
            {
                sliders?.map((item,i)=>(
                    <SliderItem key={i} item = {item} />
                ))
            }
        </Carousel>
    )
}

export default Sliders
