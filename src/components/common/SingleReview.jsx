import { Avatar, Card, CardHeader } from '@mui/material'
import React from 'react'

const SingleReview = ({item}) => {
    return (
        <Card>
            <CardHeader 
                avatar = {
                    <Avatar style={{backgroundColor:'#FF5733'}}>
                        {/* {item?.customer?.username?.[0]} */}
                    </Avatar>
                }
                title = {item?.title}
                subheader = {item?.customer?.username}
            />
        </Card>
    )
}

export default SingleReview
