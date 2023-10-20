import React from 'react'
import { Box, Text, Icon, Circle    } from '@chakra-ui/react'
import '../../../App.css'
import {GoChevronDown} from 'react-icons/go'
import {TfiShoppingCart} from 'react-icons/tfi'
const NavBar = () => {
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' w='100%' bg='#1B5E20' h='50px' px='100px' >
    <Box w='30%'  display='flex' justifyContent='space-between' alignItems='center' border='1px solid none' >
        <Box >
        <Text fontSize='24px' color='white' fontWeight='bold' >Reeco</Text>
        </Box>
       {['Store', 'Orders', 'Analytics'].map((ele) => (
         <Box key={ele}>
            <Text fontSize='16px' color='whitesmoke' fontWeight='500' >{ele}</Text>
        </Box>
       ))}
        
    </Box>
    <Box w='13%' display='flex' justifyContent='space-between' alignItems='center' border='1px solid none'>
        <Box  position='relative' border='1px solid none' p='0' pb='8px'>
        <Circle position='relative' top='14px' left='-8px' size='17px' bg='#00C853' color='white'>
           <Text fontSize='10px' color='whitesmoke' fontWeight='600' >12</Text>
        </Circle>
        <Icon as={TfiShoppingCart} color='white' w={6} h={6}/>
        </Box>
        <Box display='flex' alignItems='center'>
        <Text fontSize='16px' color='whitesmoke' fontWeight='500' >Hello, James</Text>
        &nbsp;
        <Icon as={GoChevronDown} color='white'/>
        </Box>
    </Box>
    </Box>
  )
}

export default NavBar