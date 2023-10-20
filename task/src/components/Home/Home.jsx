import React from 'react'
import { Box } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import OrderHeader from './components/OrderHeader'
import OrderInfo from './components/OrderInfo'
const Home = () => {
  return (
    <Box w='100vw' h='100vh' border='1px solid black'>
     <NavBar />
     <Box bg='whitesmoke'>
     <OrderHeader />
     <OrderInfo />
     </Box>
    </Box>
  )
}

export default Home