import React from 'react'
import { Box, Text, Icon , Button   } from '@chakra-ui/react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
const OrderHeader = () => {
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' w='100%'
    h='100px' px='100px' zIndex='2' boxShadow='lg' py='10px' border='1px solid blue'>
     <Box w='18%' h='100%' display='flex' flexDirection='column' justifyContent='space-between' alignItems='center'>
      <Box w='70%' display='flex' flex='1' justifyContent='space-between' alignItems='center' >
        <Box  display='flex' textAlign='left'>
            <Text textAlign='left' fontSize='sm' fontWeight='500'>Orders</Text>
            <Icon as={MdOutlineKeyboardArrowRight   } w={5} h={5} color='red.500' mt='1px'/>
        </Box>
        <Box >
            <Text fontSize='sm' fontWeight='500' as='u'>Order 32457ABC</Text>
        </Box>
      </Box>
       <Box w='70%' display='flex' flex='1' justifyContent='space-between' alignItems='center' >
        <Box>
            <Text fontSize='22px' fontWeight='600'>Order</Text>
        </Box>
        <Box >
            <Text fontSize='22px' fontWeight='600'>32457ABC</Text>
        </Box>
      </Box>
     </Box>
      <Box h='100%'  w='17%' display='flex' justifyContent='space-between'  alignItems='flex-end'>
       <Button size='md' borderRadius='full' border='1px solid #1B5E20' bg='white' color='#1B5E20'>
        Back
       </Button>
       <Button size='md' borderRadius='full' bg='#1B5E20' color='white'>
        Approve order
     </Button>
      </Box>
     </Box>
  )
}

export default OrderHeader