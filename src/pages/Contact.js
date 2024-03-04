import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:10,ml:10, "& h4":{fontWeight:'bold',mb:2}}}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <p>    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, consequuntur accusamus! Quia porro sit fugiat consequuntur vel accusamus officiis totam pariatur laudantium enim nemo quis, blanditiis doloribus quas obcaecati magnam iure assumenda est autem cum. Minus nam quae modi sunt corporis vero ipsam fugiat cupiditate inventore voluptate assumenda pariatur eligendi perspiciatis, sapiente tempore voluptas, dolore nesciunt iure? Blanditiis ea incidunt adipisci? Eveniet aspernatur perspiciatis repudiandae nostrum nisi labore ducimus quidem fugit obcaecati rerum tempore nemo ad numquam minima debitis excepturi quibusdam, consequuntur veritatis corporis laudantium porro repellendus magni fuga. Officia veritatis adipisci iure placeat itaque id recusandae. Molestias, magnam dolorem.</p>
      </Box>
      <Box sx={{m:3, width:'600px', ml:10}}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white',textAlign:'center'}}>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                   <SupportAgentIcon sx={{color:'red', pt:1}}/> 1800-00-00000 (TollFree)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                   <EmailIcon sx={{color:'blue', pt:1}}/> help@myresturant.com 
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                   <AddIcCallIcon sx={{color:'green', pt:1}}/> 1000080000
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
