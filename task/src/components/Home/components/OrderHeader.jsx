import React from 'react'
import { Box, Text, Icon, Circle    } from '@chakra-ui/react'
const OrderHeader = () => {
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' w='100%'
    h='100px' px='100px' zIndex='2' boxShadow='lg' py='15px' border='1px solid none'>
     <Box h='100%' display='flex' flexDirection='column' justifyContent='space-between' alignItems='center'>
      <Box border='1px solid black'>
        <Text fontSize='sm' fontWeight='500'></Text>
      </Box>
      <Box border='1px solid black'>
        <Text fontSize='24px' fontWeight='900' >Order 32457ABC</Text>
      </Box>
     </Box>
     <Box></Box>
    </Box>
  )
}

export default OrderHeader