import { AppBar, Badge, Button, Card, ClickAwayListener, Grid, IconButton, InputBase, MenuItem, Paper, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AccountCircleRounded, Search, ShoppingCart } from '@mui/icons-material'
import { useStateValue } from '../state/stateProvider'
const Navbar = () => {

    const [{profile},{}] = useStateValue();
    // console.log('Profile from Nav : ',profile);
    
    const [text,setText] = useState('')
    const [showMenu,setShowMenu] = useState(false)

    const navigate = useNavigate()
    const sendHome = () => navigate('/')
    const search = () => {
        navigate(`/q-${text}`)
        setText('')
    }

    const logout = () => {
        window.localStorage.removeItem('token')
        window.location.href = '/login'
    }

    const orderpage = () => {
        navigate('/orders')
    }
    const profilepage = () => {
        navigate(`/profile-${profile?.username}`)
    }

    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Grid container>

                    <Button onClick={sendHome} color='inherit'>
                        <Typography>SANJU-SHOP</Typography>
                    </Button>
                    <Paper style={{margin:'0 20px'}}>
                        <InputBase 
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                        placeholder='Search'
                        style={{
                            padding:'6px 10px'
                        }}
                        />
                        <IconButton
                        onClick={search}
                        disabled={text.length <= 0 ? true : false}
                        >
                            <Search />
                        </IconButton>

                    </Paper>
                </Grid>

                {
                    profile === null ? (
                        <Button onClick={()=>navigate('/login')} color='inherit'
                        >Login</Button>
                    ):(
                        <>
                        <IconButton onClick={orderpage} color='inherit'>
                            <Badge badgeContent='3' color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
        
                        <IconButton color='inherit' onClick={()=>setShowMenu(true)}>
                            <AccountCircleRounded />
                        </IconButton>
        
                        { showMenu &&
                        <ClickAwayListener onClickAway={()=>setShowMenu(false)}>
                        <Card style={{
                            position:'fixed',
                            top:'50px',
                            right:'10px'
                        }}>
                            <MenuItem onClick={profilepage}>Profile</MenuItem>
                            <MenuItem onClick={logout}>Logout</MenuItem>
                        </Card>
                        </ClickAwayListener>
                        }
                    </>
                    )
                }

            </Toolbar>
        </AppBar>
    )
}

export default Navbar
