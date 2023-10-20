import React from 'react'
import { Skeleton, Stack } from '@chakra-ui/react'
const LoadingSkeleton = () => {
  return (
<Stack maxW='100%' px='100px' h='400px' mt='50px'>
 {new Array(8).fill('*').map((ele, ind) => (
     <Skeleton key={ind} height='20px' />
 ))}
</Stack>
  )
}

export default LoadingSkeleton