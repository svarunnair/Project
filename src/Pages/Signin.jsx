
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Signin() {
  
    const userData = JSON.parse(localStorage.getItem('cridential'))
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[show,setShow]=useState(false)
    const navigate=useNavigate()
    const token=localStorage.getItem('Token')
    
    


    const handleEmail=(e)=>{
        let value=e.target.value
        setEmail(value)

    }

    const handlePassword=(e)=>{
        let value=e.target.value
        setPassword(value)
    }

    

    const handleSubmit=()=>{
       
        let flag=false
        for(let i=0;i<userData.length;i++){
        if(userData[i].email===email&&userData[i].password===password){
            flag=true
        }}
    if(flag===true){
        console.log("aaaaaaaaaaaa")
        navigate("/home")
        let save="abc"
        localStorage.setItem('Token',JSON.stringify(save))
       setShow(true) 
    }
}

const handleNavigate=()=>{
    navigate("/signup")
}








  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input  onChange={handleEmail} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input onChange={handlePassword} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
              onClick={handleSubmit}
              colorScheme='teal' variant='outline'
                // bg={'blue.400'}
                // color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
          <Text onClick={handleNavigate} cursor={'pointer'} fontSize='sm'>Did't sign up ? sign up</Text>
        </Box>
      </Stack>
    </Flex>
  )
}