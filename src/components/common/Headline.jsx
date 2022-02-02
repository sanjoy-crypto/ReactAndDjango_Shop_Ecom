import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Headline = ({title,subtitle}) => {
    return (
       <Grid container style={{
        justifyContent:'center',
        borderBottom:'2px solid #555',
        marginTop:'30px',
        paddingBottom:'10px'
       }}>
           <Box style={{
               fontWeight:'bold',
               fontSize:'20px',
               TextTransform:'uppercase',
               color:'#FF5733',
               marginRight:'10px',
           }}>
               {title}
           </Box>
            <Box style={{
               fontWeight:'bold',
               fontSize:'20px',
               TextTransform:'uppercase',
               color:'black',
           }}>
               {subtitle}
           </Box>
       </Grid>
    )
}


export default Headline

