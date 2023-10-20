import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Text, Icon , Button, Input, InputGroup, InputLeftElement , InputRightElement,Grid, GridItem   } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image 
} from '@chakra-ui/react'
import {TfiSearch} from 'react-icons/tfi'
import {PiPrinterLight} from 'react-icons/pi'
import {RxCross2} from 'react-icons/rx'
import {AiOutlineCheck} from 'react-icons/ai'
const ProductsContainer = () => {
    const {products} = useSelector(state => state.order.order);
    console.log(products)
  return (
    <Box h='375px' mt='15px'  maxW='100%' mx='100px' borderRadius='md' border='1px solid lightgrey' bg='white' py='10px' px='30px'>
    <Box display='flex' justifyContent='space-between'>
        <InputElement />
    <Box display='flex' gap={7} alignItems='center'>
        <Button size='sm' borderRadius='full' border='1px solid #1B5E20' bg='white' color='#1B5E20'>
        Add item
       </Button>
       <Icon as={PiPrinterLight} w={6} h={6} color='red.500' _hover={{cursor: 'pointer'}}/>
    </Box>
    </Box>
      {products && <ProductsTable />}
    </Box>
  )
}

const InputElement = () => {
    return (
        <>
        <InputGroup  display='flex' alignItems='center' w='35%'>
    <Input h='35px' placeholder='Search...' borderRadius='full'/>
    <InputRightElement>
      <Icon as={TfiSearch} w={5} h={5} color='red.500' _hover={{cursor: 'pointer'}}/>
    </InputRightElement>
  </InputGroup>
        </>
    )
}

const ProductsTable = () => {
    const {products} = useSelector(state => state.order.order);
    console.log(products)
    return <Box h='325px'  mt='15px' >
        <Box  border='1px solid lightgrey' borderTopRightRadius='md' borderTopLeftRadius='md' display='flex'   justifyContent='space-between' alignItems='center'  py='3px'>
            {['', 'Product name', 'Brand', 'Price', 'Quantity', 'Total', 'Status'].map((ele, ind) => (
             <Box  w={`${(ind === 1 || ele === 'Status') ? '25%': ind === 0 ? '8%': ele==='Brand' ? '8%' : '7%'}`} key={ind} border='1px solid none'>
             <Text fontSize='sm' fontWeight='600'>{ele}</Text>
             </Box>
            ))}
        </Box>
        <Box h='300px' overflowY='scroll'>

     {products && products.map((ele, ind) => (
         <Box key={ele.id} h='75px' borderBottom='2px solid lightgrey' display='flex'  justifyContent='space-between' alignItems='center'>
            <Box w='8%'  display='flex' justifyContent='center'>
                <Image
    boxSize='50px'
    objectFit='cover'
    src='https://bit.ly/dan-abramov'
    alt='Dan Abramov'
  />
             </Box>
            <Box  w='25%' border='1px solid none'>
             <Text fontSize='sm' fontWeight='600'>{ele.product_name}</Text>
             </Box>
            <Box  w='8%' border='1px solid none'>
             <Text fontSize='sm' fontWeight='600'>{ele.brand}</Text>
             </Box>
            <Box  w='7%' border='1px solid none'>
             <Text fontSize='sm' fontWeight='600'>{ele.price_unit} {ele.price}</Text>
             </Box>
            <Box  w='7%' border='1px solid none'>
             <Text fontSize='sm' fontWeight='600'> {ele.quantity} {ele.qty_unit}</Text>
             </Box>
            <Box  w='7%' border='1px solid none'>
             <Text fontSize='sm' fontWeight='600'>{ele.price_unit}{ele.total_cost} </Text>
             </Box>
            <Box  w='25%' h='100%' border='1px solid none' bg='whitesmoke' display='flex' alignItems='center' justifyContent='flex-end' pr='15px' gap={4}>
              <Icon _hover={{cursor: 'pointer'}} as={AiOutlineCheck} w={5} h={5} color='green.500' />
              <Icon _hover={{cursor: 'pointer'}} as={RxCross2} w={5} h={5} color='red.500' />
              <Text _hover={{cursor: 'pointer'}} fontSize='sm' fontWeight='600'>Edit</Text>
             </Box>
        </Box>
     ))}
        </Box>
        
        

    </Box>
}

export default ProductsContainer