// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Navigate, useNavigate } from 'react-router-dom'


// function HomePage() {

//   const[count,setCount]=useState([])


//   const navigate=useNavigate()

//   const handleLogout=()=>{
//     navigate("/signin")
//     localStorage.removeItem('Token')
//   }



//   const data=()=>{

//     axios({
//       url:"https://shibe.online/api/shibes?count=10",
//       method: "GET" 
//     })
//     .then((res)=>{
//       setCount(res.data)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
//   }
//   useEffect(()=>{
//     data()
//   },[])

//   console.log(count)


//   return (
//     <div><h1>HomePage</h1>

//     <button onClick={handleLogout}>Logout</button>

//     {count?.map((item)=>(
//       <>
//       <img src= { item }  />
      
//       </>
//     ))}
    
    
//     </div>
//   )
// }

// export default HomePage













import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  Stack,
  Avatar,
  GridItem,
  Grid,
  
} from '@chakra-ui/react'
import NavBar from '../Components/Navbar'

export default function HomePage() {

  const[count,setCount]=useState([])
  const navigate=useNavigate()







  const data=()=>{

    axios({
      url:"https://shibe.online/api/shibes?count=10",
      method: "GET" 
    })
    .then((res)=>{
      setCount(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    data()
  },[])

  console.log(count)









  return (
    <>
    <NavBar/>
    <Grid justifyItems={'center'} alignItems={'center'} templateColumns='repeat(2, 1fr)' >
     {count.map((item)=>(
    <GridItem   py={6}>
     

    
 <Box
 maxW={'445px'}
 w={'full'}
 bg={('white', 'gray.900')}
 boxShadow={'2xl'}
 rounded={'md'}
 p={6}
 overflow={'hidden'}>
 <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
   <Image
     src={item}
     w="100%"
     h="300px"
     fill
     alt="Example"
   />
 </Box>
 <Stack>
   <Text
     color={'green.500'}
     textTransform={'uppercase'}
     fontWeight={800}
     fontSize={'sm'}
     letterSpacing={1.1}>
     Blog
   </Text>
   <Heading
     // eslint-disable-next-line react-hooks/rules-of-hooks
     color={('gray.700', 'white')}
     fontSize={'2xl'}
     fontFamily={'body'}>
     Boost your conversion rate
   </Heading>
   <Text color={'gray.500'}>
     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
     eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
     voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
   </Text>
 </Stack>
 <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
   <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
   <Stack direction={'column'} spacing={0} fontSize={'sm'}>
     <Text fontWeight={600}>Achim Rolle</Text>
     <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
   </Stack>
 </Stack>
</Box>
   
   
    </GridItem>
      ))}
    </Grid>
    </>
  )
}