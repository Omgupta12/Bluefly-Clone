import {
  Button,
  Center,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
let token=true

  const handleLogin = () => {
    if(token){
      navigate("/");
    }
    else{
      alert("wrong data")
    }
  };

  return (
    <Center>
      <SimpleGrid w={"xl"} mt={5}>
        <Stack py={5} spacing={8}>
          <Text fontSize={"5xl"}>LOGIN</Text>
          <form onSubmit={handleLogin}>
            <Stack>
              <Center>
                <Input
                  type="email"
                  required
                  placeholder="Email"
                  h={50}
                  w={"sm"}
                />
              </Center>
              <Center>
                <Input
                  type="number"
                  required
                  placeholder="Password"
                  h={50}
                  w={"sm"}
                />
              </Center>
              <Center>
                <Button
                  type="submit"
                  h={50}
                  w={"sm"}
                  bg={"black"}
                  color={"white"}
                >
                  SIGN IN
                </Button>
              </Center>
            </Stack>
          </form>
          <Link to={"/signup"}>Create account</Link>
        </Stack>
      </SimpleGrid>
    </Center>
  );
};

export default Login;
