import React,{useState} from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import "./styles/HeaderStyle.css"
import WidgetsIcon from '@mui/icons-material/Widgets';
const Header = () => {

   const [mobileopen,setmobileopen]=useState(false)

   const handleDrawerToggle =()=>{
    setmobileopen(!mobileopen)
   }
   const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:"center"}}>
       <Typography color={'goldenrod'} variant='h6' component="div" sx={{flexGrow:1, my:2}}>
              <FastfoodIcon />
              My Resturant
            </Typography>
            <Divider/>     
               <ul className='mobile-navigation'>
                <li>  
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
               </ul>
            
    </Box>
   )

  return (
    <div>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton color="inherit" aria-label='open drawer' edge="start" sx={{mr:2,display:{sm:"none"}}}
            onClick={handleDrawerToggle}
            >
              <WidgetsIcon/>
            </IconButton>
            <Typography color={'goldenrod'} variant='h6' component="div" sx={{flexGrow:1}}>
              <FastfoodIcon />
              My Resturant
            </Typography>
            <Box sx={{display:{xs:'none',sm:"block"}}}>
               <ul className='navigation-menu'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
               </ul> 
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant='temporary' open={mobileopen} onClose={handleDrawerToggle} sx={{display:{xs:'block',sm:'none'},"& .MuiDrawer-paper":{
            boxSizing:'border-box',
            width:'250px'
          }}}>
            {drawer}
          </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
      </Box>
    </div>
  )
}

export default Header
