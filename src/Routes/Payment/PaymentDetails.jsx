import {
  Box,
  Text,
  Image,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Radio,
  RadioGroup,
  Stack,
  Checkbox,
  HStack,
  VStack,
  Input,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";

import { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

export const PaymentDetails = () => {
  const [value, setValue] = useState("1");
  const [newData, setNewData] = useState([]);
  const [pro, setpro] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  const isMounted = useRef();

  const [shippingDetails, setShippingDetails] = useState({});

  async function getUserShippingDetails() {
    try {
      const response = await axios.get(
        `https://bluefly-server.onrender.com/product/${id}`
      );
      setShippingDetails(response.data.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  const setData = (data) => {
    const saved = JSON.parse(localStorage.getItem("userHistory")) || [];
    saved.push(data);
    setpro(data);
    localStorage.setItem("userHistory", JSON.stringify(saved));
    setNewData(saved);
  };

  async function getData() {
    const response = await axios.get(
      `https://bluefly-server.onrender.com/product/${id}`
    );
    // console.log(response);
    setData(response.data.data);
  }

  useEffect(() => {
    getUserShippingDetails();
  }, []);

  // console.log(newData);

  useEffect(() => {
    // Below Two lines are to stop the component from breaking because of the new feature in React which essentially renders the component twice.
    if (isMounted.current) return;
    isMounted.current = true;
    getData();
  }, []);

  const handlePay = (e) => {
    navigate("/payment");
  };

  return (
    <Box display="flex" height="1300px" marginTop="150px">
      <Box
        display="flex"
        flexDirection="column"
        pl={{ lg: "8%" }}
        pt={{ lg: "5%" }}
        mr={{ lg: "3%" }}
      >
        <Box>
          <Link to="#">
            <Image
              height="40px"
              width="261px"
              src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?180653"
              alt="BlueFly Logo"
            />
          </Link>
        </Box>
        <Box
          border="1px solid #cdcdcd"
          mt={{ lg: "12%" }}
          w="600px"
          borderRadius="8px"
        >
          <TableContainer>
            <Table variant="simple" size="md">
              <Tbody>
                <Tr>
                  <Td color="#737373">Contact</Td>
                  <Td>{shippingDetails.email}</Td>
                  <Td>
                    {" "}
                    <Link to="#"> Change </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td color="#737373">Ship to</Td>
                  <Td>Raebareli, Uttar Pradesh, India & PinCode : 229121</Td>
                  <Td>
                    <Link to="#"> Change </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td color="#737373">Method</Td>
                  <Td>Standard (free) </Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box mt={{ lg: "12%" }}>
          <Box>
            <Text fontSize="1.28em" color="#333333">
              Payment
            </Text>
            <Text fontSize="14px">
              All transactions are secure and encrypted
            </Text>
          </Box>
          <Box mt={{ lg: "4%" }} w="600px" borderRadius="8px">
            <Box pt="10px">
              <Stack spacing={5} border="1px solid #cdcdcd" borderRadius={5}>
                <Radio pl="7" pt="3" fontWeight="bold" colorScheme="blackAlpha">
                  Credit card
                </Radio>
                <borderBottom></borderBottom>
                <Center>
                  <Input
                    _focus={{ outline: "black", borderColor: "black" }}
                    w="90%"
                    required
                    placeholder="Card number"
                    type={"number"}
                  />
                </Center>
                <Center>
                  <Input
                  required
                    _focus={{ outline: "black", borderColor: "black" }}
                    w="90%"
                    placeholder="Name on card"
                    type={"text"}
                  />
                </Center>
                <Center>
                  <Grid w="90%" templateColumns="repeat(2, 1fr)" gap={5}>
                    <GridItem w="100%">
                      <Input
                      required
                        _focus={{ outline: "black", borderColor: "black" }}
                        mb="5"
                        placeholder="Expiration date (MM / YY)"
                        type={"number"}
                      />
                    </GridItem>
                    <GridItem w="100%">
                      <Input
                      required
                        _focus={{ outline: "black", borderColor: "black" }}
                        mb="5"
                    
                        placeholder="Security code"
                        type={"number"}
                      />
                    </GridItem>
                  </Grid>
                </Center>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box mt={{ lg: "12%" }}>
          <Box>
            <Text fontSize="1.28em" color="#333333">
              Billing Address
            </Text>
            <Text fontSize="14px">
              Select the address that matches your card or payment method.
            </Text>
          </Box>
          <Box
            border="1px solid #cdcdcd"
            borderRadius="8px"
            mt="22px"
            padding="4px"
          >
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="column">
                <Radio
                  size="md"
                  p="8px"
                  fontWeight="bold"
                  colorScheme="blackAlpha"
                  value="1"
                >
                  Same as shipping address
                </Radio>
                <hr />
                <Radio
                  size="md"
                  p="8px"
                  fontWeight="bold"
                  colorScheme="blackAlpha"
                  value="2"
                >
                  {" "}
                  Use a different billing address
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Box>
        <Box mt={{ lg: "12%" }}>
          <Box>
            <Text fontSize="1.28em" color="#333333">
              Remember me
            </Text>
          </Box>
          <Box
            border="1px solid #cdcdcd"
            mt="22px"
            mb="22px"
            borderRadius="8px"
          >
            <Checkbox
              p="8px"
              iconColor="blackAlpha"
              colorScheme="blackAlpha"
              spacing={4}
              size="lg"
            >
              Save my information for faster checkout
            </Checkbox>
          </Box>
        </Box>
        <Box mt={{ lg: "3%" }}>
          <HStack spacing="345px">
            <Link to="/">
              <ChevronLeftIcon />
              Return to shipping
            </Link>

            <Box
              as="button"
              padding=".85em 1.7em"
              backgroundColor="#111111"
              color="white"
              borderRadius="8px"
              textAlign="center"
              onClick={handlePay}
            >
              Pay now
            </Box>
          </HStack>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        ml={{ lg: "3%" }}
        pt={{ lg: "5%" }}
        bgColor="rgb(250, 250, 250)"
      >
        <Box>
          {newData.map((item) => {
            return (
              <>
                <Box key={item._id} mb={{ lg: "4%" }}>
                  <HStack spacing="10px">
                    <Box
                      border="1px solid #cdcdcd"
                      borderRadius="8px"
                      h="4.6em"
                      w="4.6em"
                      background="#fff"
                    >
                      <Box
                        borderRadius="8px"
                        w="100%"
                        h="100%"
                        overflow="hidden"
                      >
                        <Image
                          maxW="100%"
                          maxH="100%"
                          margin="auto"
                          src={item.img1}
                        />
                      </Box>
                    </Box>
                    <Box w="340px" h="4.6em" overflow="hidden">
                      <VStack align="left" spacing={0}>
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          wordBreak="break-word"
                        >
                          {item.title}
                        </Text>
                        <Text color="#737373" fontSize="sm">
                          {item.size[0]}
                        </Text>
                      </VStack>
                    </Box>
                    <Box pl="1em">
                      <Text fontSize="md" textAlign="right">
                        {`$(${item.price}*${item.qty})`}
                      </Text>
                      <Text fontSize="md" textAlign="right" fontWeight="bold">
                        {`$ ${item.price * item.qty}`}
                      </Text>
                    </Box>
                  </HStack>
                </Box>
              </>
            );
          })}
        </Box>
        <hr />
        <Box mt={{ lg: "5%" }} mb={{ lg: "5%" }}>
          <HStack spacing="50px">
            <Input
              _focus={{ outline: "black", borderColor: "black" }}
              placeholder="Gift card or discount code"
              htmlSize={45}
              width="auto"
            />
            <Box
              as="button"
              padding=".85em 1.7em"
              backgroundColor="#111111"
              color="white"
              borderRadius="8px"
              textAlign="center"
            >
              Apply
            </Box>
          </HStack>
        </Box>
        <hr />
        <Box mb={{ lg: "5%" }}>
          <VStack>
            <HStack spacing="385px">
              <Text fontSize="sm" color="#737373">
                Subtotal
              </Text>
              <Text fontSize="sm" fontWeight="bold">
                {`$ ${newData.reduce(
                  (prev, curr) => prev + curr.price * curr.qty,
                  0
                )}`}
              </Text>
            </HStack>
            <HStack spacing="385px">
              <Text pr="14px" fontSize="sm" color="#737373">
                Shipping
              </Text>
              <Text fontSize="sm" fontWeight="bold">
                Free
              </Text>
            </HStack>
          </VStack>
        </Box>
        <hr />
        <Box mt={{ lg: "5%" }}>
          <HStack spacing="395px">
            <Text pl="8px"> Total</Text>
            <Text fontWeight="bold" fontSize="lg">
              {`$ ${newData.reduce(
                (prev, curr) => prev + curr.price * curr.qty,
                0
              )}`}
            </Text>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};
