import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import {updateProductDetails} from '../redux_state_slices/orderSlice.js'
const GlobalModal = ({ isOpen, onOpen, onClose, item}) => {
  const dispatch = useDispatch()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return  <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Missing product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} fontWeight='600'>
            is {`'${item?.product_name}'`} is missing ?
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>No</Button>
            <Button onClick={() => {
              dispatch(updateProductDetails({id: item?.id, key: 'status', value: 'missing'}));
              onClose()
            }}  ml={3}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
}

export default GlobalModal