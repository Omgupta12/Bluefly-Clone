import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Text,
  Flex,
  Spacer,
  Box,
  DrawerCloseButton,
  Stack,
  Image,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function Cart(isOpen, onOpen, onClose, setsidebar, sidebar) {
  const [items, setItems] = useState([]);
  const [qty, setQty] = useState(1);

  const { id } = useParams();
  // console.log("id", items);

  const updatecartqty = async (value) => {
    const data = await axios
      .patch(`https://bluefly-server.onrender.com/product/${id}`, {
        qty: value,
      })
      .then((res) => {
        getCartData();
      });
    setQty(data);
    setQty(data.data.qty);
    console.log(data.data, "a");
  };

  const handleQty = (value, id) => {
    if (value < 1) {
      alert("Quantity can not be 0");

      return;
    }
    if (value > 5) {
      alert("You can't buy more than 5 Products");
      return;
    }
    updatecartqty(value, id);
  };

  const getCartData = async () => {
    const data = await axios
      .get(`https://bluefly-server.onrender.com/product/${id}`)
      .then((res) => {
        setItems(res.data.data);
      });
  };

  useEffect(() => {
    getCartData();
  }, [qty]);

  return (
    <div>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <h1
              style={{ fontSize: "30px", fontFamily: "'Futura', sans-serif" }}
            >
              CART
            </h1>
            <DrawerCloseButton
              onClick={() => {
                window.location.reload();
                // setsidebar(false);
              }}
              mt="4"
            />
          </DrawerHeader>
          <DrawerBody>
            {/* {items.map((e) => { */}
            {/* return e.id == id ? ( */}
            <Box mb="5">
              <Grid
                templateRows="auto"
                templateColumns="repeat(12,1fr)"
                gap={4}
                borderBottomWidth="2px"
                pb="5"
              >
                <GridItem rowSpan={3} colSpan={3}>
                  <Image src={items.img1} />
                </GridItem>
                <GridItem colSpan={9} style={{ margin: "10px" }}>
                  <Text>{items.title}</Text>
                </GridItem>
                <GridItem colSpan={9} h="10">
                  <Text>color - {items.color}</Text>
                </GridItem>
                <GridItem colStart={4}>
                  <Stack border="1px" direction="row">
                    <Button
                      borderRight="1px"
                      borderRadius="none"
                      size="sm"
                      onClick={() => {
                        handleQty(items.qty - 1, items.id);
                      }}
                    >
                      -
                    </Button>

                    <Center>
                      <Text>{items.qty}</Text>
                    </Center>

                    <Button
                      size="sm"
                      borderLeft="1px"
                      borderRadius="none"
                      onClick={() => {
                        handleQty(items.qty + 1, items.id);
                      }}
                    >
                      +
                    </Button>
                  </Stack>
                </GridItem>
                <GridItem colEnd={12}>
                  <Text>${items.price}</Text>
                </GridItem>
              </Grid>
              <Flex mt="4" mb="4">
                <Text color={"red"}>SUBTOTAL</Text>
                <Spacer />
                <Text color={"red"}>${items.qty * items.price}</Text>
              </Flex>
            </Box>
            {/* ) : null; */}

            <Box>
              <Text mb="4">
                Shipping, taxes, and discounts codes calculated at checkout.
              </Text>

              <Link to={{ pathname: `/paymentdetails/${id}` }}>
                <Button width="100%" bgColor="black" color="white">
                  CHECK OUT
                </Button>
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
