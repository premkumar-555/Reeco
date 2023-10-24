import React, {useEffect} from 'react'
import { Box,   Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription, } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import {storeOrderDetails, updateLoading} from './redux_state_slices/orderSlice.js'
import NavBar from './components/NavBar'
import OrderHeader from './components/OrderHeader'
import OrderInfo from './components/OrderInfo'
import ProductsContainer from './components/ProductsContainer'
import LoadingSkeleton from '../Home/components/LoadingSkeleton'
import axios from 'axios'
const Home = () => {
    const dispatch = useDispatch()
    const {isLoading} = useSelector((state) => (state.order));
    const getOrderDetails = async() => {
        updateLoading(true)
      try {
        let res = await axios.get(`${import.meta.env.VITE_API}/orders/1`);
        if(res?.data){
          res.data['shippling_date'] = (new Date()).toString().substring(0, 15);
         dispatch(storeOrderDetails(res?.data))
        }
      } catch (error) {
        <Alert status='error'>
    <AlertIcon />
    {error.message}
  </Alert>
      }
      setTimeout(() => {
        updateLoading(false)
      }, 5000)
    }
    useEffect(() => {
      getOrderDetails()
    }, [])
    
  return (
    <Box w='100vw' h='100vh' bg='whitesmoke'>
     <NavBar />
     { isLoading ? <LoadingSkeleton /> : <>
     <OrderHeader />
     <OrderInfo />
     <ProductsContainer />
     </> }
    </Box>
  )
}

export default Home