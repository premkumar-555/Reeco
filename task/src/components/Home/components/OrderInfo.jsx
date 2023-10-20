import React from 'react'
import { Box, Text, Icon , Button, Grid, GridItem  } from '@chakra-ui/react'
import {IoFastFoodOutline} from 'react-icons/io5'
const OrderInfo = () => {
  return (
    
    <Grid mt='15px' h='100px' maxW='100%' mx='100px' templateColumns='repeat(6, 1fr)' gap={6} border='1px solid lightgrey' bg='white' borderRadius='md' py='10px' px='30px' justifyContent='center' alignItems='center'>
    <DynamicText value='East coast fruits & vegetables' title='Supplier'/>
    <DynamicText value='East coast fruits & vegetables' title='Shipping date'/>
    <DynamicText value='East coast fruits & vegetables' title='Total'/>
    <DynamicText value='East coast fruits & vegetables' title='Category' showIcons={true}/>
    <DynamicText value='East coast fruits & vegetables' title='Department'/>
    <DynamicText value='East coast fruits & vegetables' title='Status' bdr='none'/>
    </Grid>
  )
}

const DynamicText = ({title, value, bdr, showIcons}) => {

    return <GridItem borderRight={`1px solid ${bdr ? bdr : "lightgrey"}`}>
            <Text fontSize='xs' fontWeight='bolder' color='grey' mb='4px'>{title}</Text>
            {showIcons ? <IconBox/> : <Text fontSize='md' fontWeight='bolder'>{value}</Text>}
           </GridItem>
}

const IconBox = () => {
    return <Grid py='5px' maxW='70%' templateColumns='repeat(4, 1fr)' gap={2}>
     {new Array(8).fill('0').map((ele, ind) => (
        <GridItem key={ind}>
            <Icon as={IoFastFoodOutline} w={4} h={4} color='black.500'/>
     </GridItem>
     ))}
    </Grid>
}
export default OrderInfo