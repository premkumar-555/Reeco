import React from 'react'
import { Box, Text, Icon , Button   } from '@chakra-ui/react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
const OrderHeader = () => {
  return (
    <Box display='flex' justifyContent='space-between' alignItems='left' w='100%'
    h='75px' px='100px' zIndex='2' boxShadow='lg' py='10px' border='1px solid none' bg='white'>
     <Box w='20.5%' h='100%' display='flex' flexDirection='column' justifyContent='space-between' alignItems='flex-start' >
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
       <Button size='sm' borderRadius='full' border='1px solid #1B5E20' bg='white' color='#1B5E20'>
        Back
       </Button>
       <Button size='sm' border='1px solid #1B5E20' borderRadius='full' bg='#1B5E20' color='white' _hover={{background: 'white', color:'#1B5E20', border:'1px solid #1B5E20'}}>
        Approve order
     </Button>
      </Box>
     </Box>
  )
}

export default OrderHeader