// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';



// function Signup() {

//     const userData = JSON.parse(localStorage.getItem('cridential'))||[];
//     const[name,setName]=useState()
//     const[email,setEmail]=useState()
//     const[password,setPassword]=useState()
//     const navigate=useNavigate()
    
    
    
//     const handleName=(e)=>{

//         let value=e.target.value
//         setName(value)

//     }

//     const handleEmail=(e)=>{
//         let value=e.target.value
//         setEmail(value)
//     }

//     const handlePassword=(e)=>{
//         let value=e.target.value
//         setPassword(value)
//     }

//     const handleSubmit=()=>{
//         let data2={
//             name:name,
//             email:email,
//             password:password
//         }
//         userData.push(data2)
//         localStorage.setItem('cridential',JSON.stringify(userData))
//         // localStorage.setItem('Token',JSON.stringify(save))
        
        
        
//         navigate("/signin")
//     }



//   return (
//     <div><h1>Signup</h1>
//         <input onChange={handleName} placeholder='Name' /><br/>
//         <input onChange={handleEmail} placeholder='Email Id'/><br/>
//         <input onChange={handlePassword} placeholder='Password'/><br/>
//         <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }

// export default Signup













import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import React from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function Signup() {

    const toast = useToast()
    const userData = JSON.parse(localStorage.getItem('cridential'))||[];
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false)





    const handleName=(e)=>{

        let value=e.target.value
        setName(value)

    }

    const handleEmail=(e)=>{
        let value=e.target.value
        setEmail(value)
    }

    const handlePassword=(e)=>{
        let value=e.target.value
        setPassword(value)
    }

    const handleSubmit=()=>{




        let flag = false
        for(let i=0;i<userData.length;i++){
            if(userData[i].email===email&&userData[i].password===password){
                flag=true
            }
        }
        if(flag===false){
            if(email!==""&&name!==""&&password!==""){
                let data2={
                    name:name,
                    email:email,
                    password:password
                }
                userData.push(data2)
                localStorage.setItem('cridential',JSON.stringify(userData))
            
                navigate("/signin")
            }
            
        }



        if(flag===true){
            toast({
                title: `Account already exist`,
                status: "error",
                isClosable: true,
              })
        }
    









        
       
    }











  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input  onChange={handleName} type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input onChange={handleEmail} type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input onChange={handlePassword} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                onClick={handleSubmit}
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link to="/signin" color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}