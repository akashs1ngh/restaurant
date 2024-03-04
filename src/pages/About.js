import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15,
               textAlign:'center',
               p:2,
               "& h4":{
                fontWeight:'bold',
                my:2,
                fontSize:'2rem',
               },
               "& p":{
                textAlign:'justify',
               },
               "@media (max-width:600px)":{
                mt:0,
                "& h4":{
                  fontSize:'1.5rem'
                }
               },
                }}>
        <Typography variant='h4'>
          Welcome To My Resturant
        </Typography>
        <p>    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, consequuntur accusamus! Quia porro sit fugiat consequuntur vel accusamus officiis totam pariatur laudantium enim nemo quis, blanditiis doloribus quas obcaecati magnam iure assumenda est autem cum. Minus nam quae modi sunt corporis vero ipsam fugiat cupiditate inventore voluptate assumenda pariatur eligendi perspiciatis, sapiente tempore voluptas, dolore nesciunt iure? Blanditiis ea incidunt adipisci? Eveniet aspernatur perspiciatis repudiandae nostrum nisi labore ducimus quidem fugit obcaecati rerum tempore nemo ad numquam minima debitis excepturi quibusdam, consequuntur veritatis corporis laudantium porro repellendus magni fuga. Officia veritatis adipisci iure placeat itaque id recusandae. Molestias, magnam dolorem.</p>
        <br/>
        <p>
          hello lorem
        Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Sed, consequuntur accusamus! Quia porro sit fugiat consequuntur vel accusamus officiis totam pariatur laudantium enim nemo quis, blanditiis doloribus quas obcaecati magnam iure assumenda est autem cum. Minus nam quae modi sunt corporis vero ipsam fugiat cupiditate inventore voluptate assumenda pariatur eligendi perspiciatis, sapiente tempore voluptas, dolore nesciunt iure? Blanditiis ea incidunt adipisci? Eveniet aspernatur perspiciatis repudiandae nostrum nisi labore ducimus quidem fugit obcaecati rerum tempore nemo ad numquam minima debitis excepturi quibusdam, consequuntur veritatis corporis laudantium porro repellendus magni fuga. Officia veritatis adipisci iure placeat itaque id recusandae. Molestias, magnam dolorem.
        </p>
      </Box>
    </Layout>
  )
}

export default About
