import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Text, Icon , Button, Input, InputGroup, InputLeftElement , InputRightElement,Grid, GridItem, Badge   } from '@chakra-ui/react'
import {useDisclosure } from '@chakra-ui/react'
import {updateProductDetails} from '../redux_state_slices/orderSlice.js'
import GlobalModal from '../components/GlobalModal'

import fruitIcon from '../../../assets/Avocado Hass.jpg'
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
    const dispatch = useDispatch()
    const [selectedItem, setselectedItem] = useState(null)
   const { isOpen, onOpen, onClose } = useDisclosure()
    const {order} = useSelector(state => state.order);
    const curDate = (new Date()).toString().slice(0, 15);
    const handleCancel = (ele) => {
     setselectedItem(ele)
     if(order.shippling_date === curDate && ele.status !== 'missing' && order.status !== 'Approved'){
         onOpen();
        }else if(order.status === 'Approved'){
            alert('Can\'t update product as order already approved!')
        }else if(order.shippling_date !== curDate){
            alert('Can\'t update product as order shipping date has not yet arrived!')
        }
    }
    const handleApproval = (ele) => {
      if(ele.status !== 'Approved' && order.shippling_date === curDate && order.status !== 'Approved'){
         dispatch(updateProductDetails({id: ele.id, key: 'status', value: 'Approved'}))
        }else if(order.status === 'Approved'){
            alert('Can\'t update product as order already approved!')
        }else if(order.shippling_date !== curDate){
            alert('Can\'t update product as order shipping date has not yet arrived!')
        }
    }
    return <Box h='325px'  mt='15px' >
        <Box  border='1px solid lightgrey' borderTopRightRadius='md' borderTopLeftRadius='md' display='flex'   justifyContent='space-between' alignItems='center'  py='3px'>
            {['', 'Product name', 'Brand', 'Price', 'Quantity', 'Total', 'Status'].map((ele, ind) => (
             <Box  w={`${(ind === 1 || ele === 'Status') ? '25%': ind === 0 ? '8%': ele==='Brand' ? '8%' : '7%'}`} key={ind} border='1px solid none'>
             <Text fontSize='sm' fontWeight='600'>{ele}</Text>
             </Box>
            ))}
        </Box>
        <Box h='275px' overflowY='scroll' >

     {products && products.map((ele, ind) => (
        <>
         <Box key={ele.id} h='75px' borderBottom='2px solid lightgrey' display='flex'  justifyContent='space-between' alignItems='center'>
            <Box w='8%'  display='flex' justifyContent='center'>
                <Image
    boxSize='50px'
    objectFit='cover'
    src={fruitIcon}
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
                {ele.status === 'Approved' && <Badge transition='0.5s all' variant='solid' colorScheme='green' borderRadius='full' fontSize='sm' fontWeight='500'>
                Approved</Badge> }
                {ele.status === 'missing' && <Badge variant='solid' fontSize='sm' colorScheme='red' borderRadius='full' fontWeight='500'>
               Missing
              </Badge>}
              <Icon  _hover={{cursor: `${order.status !== 'Approved'?'pointer' : 'not-allowed'}`}} as={AiOutlineCheck} w={5} h={5} color='green.500' onClick={() => {handleApproval(ele)}} />
              <Icon onClick={() => handleCancel(ele)} _hover={{cursor: `${order.status !== 'Approved'?'pointer' : 'not-allowed'}`}} as={RxCross2} w={5} h={5} color='red.500' />
              <Text _hover={{cursor: 'pointer'}} fontSize='sm' fontWeight='600'>Edit</Text>
             </Box>
        </Box>
        </>
     ))}
     <GlobalModal  isOpen={isOpen} onOpen={onOpen} onClose={onClose} item={selectedItem}/>
        </Box>
        

    </Box>
}

export default ProductsContainer