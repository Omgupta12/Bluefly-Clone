import { Button, Center, Input, SimpleGrid, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"


const Login = () => {
  const navigate =useNavigate()

  const handleLogin=()=>{
    navigate("/")
  }

  return (
    <Center>
     
      <SimpleGrid w={'xl'} mt={5}  >
        <Stack py={5} spacing={8}>
        <Text  fontSize={"5xl"}>LOGIN</Text>
        <Center>
          <Input type='email' placeholder='Email' h={50} w={'sm'}/>
          </Center>
          <Center>
          <Input type='number' placeholder='Password' h={50} w={'sm'}/>
          </Center>
            <Center>
            <Link to="" >Forget Password</Link>
            </Center>
          <Center>
          <Button onClick={handleLogin} h={50} w={'sm'} bg={'black'} color={'white'}>SIGN IN</Button>
          </Center>
          <Link to={"/signup"}>Create account</Link>
        </Stack>
      </SimpleGrid>
      </Center>
  )
}

      export default Login